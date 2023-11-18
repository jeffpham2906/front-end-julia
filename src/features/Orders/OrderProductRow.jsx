import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi2";
import { IMAGE_URL_API } from "../../Constants/IMAGE_URL_API";
import ModalSearchProduct from "./ModalSearchProduct";

function OrderProductRow({ product, isChanging, setOrder }) {
  const [searchProductMode, setSearchProductMode] = useState(false);
  const haveImage = Boolean(product.image);

  function updateProduct({ data }) {
    setOrder((pre) => {
      return {
        ...pre,
        order_products: pre.order_products.map((ele) => {
          if (ele.fake_id === product.fake_id)
            return {
              ...ele,
              ...data,
            };
          return ele;
        }),
      };
    });
  }
  function deleteProduct(product_id) {
    setOrder((pre) => {
      return {
        ...pre,
        order_products: pre.order_products.filter((ele) => {
          if (ele._id === product_id) return false;
          if (ele?.fake_id === product_id) return false;

          return true;
        }),
      };
    });
  }
  return (
    <>
      {searchProductMode && (
        <ModalSearchProduct
          onCloseModal={() => setSearchProductMode(false)}
          updateProduct={updateProduct}
        />
      )}

      <div className=""></div>
      <div className="grid grid-cols-[4.5rem,1fr,4rem] items-center gap-x-3 sm:col-start-2 sm:grid-cols-[1fr,4rem]">
        {!haveImage ? (
          <div
            onClick={() => {
              if (isChanging) setSearchProductMode(!searchProductMode);
            }}
            className="col-start-1 col-end-4 flex cursor-pointer items-center gap-2"
          >
            <p>Chọn sản phẩm</p>
            <HiOutlinePlus />
          </div>
        ) : (
          <>
            <img
              src={`${IMAGE_URL_API}/products/${product.image}`}
              alt="anhsp"
              className="h-16 w-full cursor-pointer rounded-md sm:hidden"
              onClick={() => {
                if (isChanging) setSearchProductMode(!searchProductMode);
              }}
            />
            <p>{product.name}</p>
            <p className="flex items-center gap-1 px-1">
              x
              <input
                type="number"
                className={`w-full rounded-md  px-2 py-1 ${
                  isChanging ? "border border-gray-400" : ""
                }`}
                value={product.quantity}
                onChange={(e) => {
                  if (e.target.value < 1) return;
                  updateProduct({
                    data: {
                      quantity: +e.target.value,
                    },
                  });
                }}
                disabled={!isChanging}
              />
            </p>
          </>
        )}
      </div>
      {/**Picking size */}
      <select
        className={`bg-inherit ${
          !isChanging
            ? "w-4/5 appearance-none disabled:opacity-100"
            : "w-full rounded-md border border-gray-400 px-2 py-1"
        }`}
        disabled={!isChanging}
        defaultValue={product?.size || "Choose here"}
        onChange={(e) =>
          updateProduct({
            data: {
              size: e.target.value,
            },
          })
        }
      >
        <option value="Choose here" disabled hidden>
          Choose here
        </option>
        <option value="Size XS">Size XS</option>
        <option value="Size S">Size S</option>
        <option value="Size M">Size M</option>
        <option value="Size L">Size L</option>
        <option value="Note">Note</option>
      </select>

      {/**Picking form */}
      <select
        className={`bg-inherit ${
          !isChanging
            ? "w-4/5 appearance-none disabled:opacity-100 sm:w-full"
            : "w-full rounded-md border border-gray-400 px-2 py-1"
        }`}
        disabled={!isChanging}
        defaultValue={product?.form || "Choose here"}
        onChange={(e) =>
          updateProduct({
            data: {
              form: e.target.value,
            },
          })
        }
      >
        <option value="Choose here" disabled hidden>
          Choose here
        </option>
        <option value="Nhọn">Nhọn</option>
        <option value="Tròn nhọn">Tròn nhọn</option>
        <option value="Thang">Thang</option>
        <option value="Vuông">Vuông</option>
      </select>

      <input
        className={`col-start-5 col-end-7 w-full rounded-md border px-2 py-1 sm:col-start-2 sm:col-end-4 ${
          isChanging && "border-gray-400"
        }`}
        placeholder="Ghi chú"
        disabled={!isChanging}
        value={product.note}
        onChange={(e) => updateProduct({ data: { note: e.target.value } })}
      />
      <div
        className="cursor-pointer sm:hidden"
        onClick={() => deleteProduct(product?.fake_id || product._id)}
      >
        {isChanging ? "Xóa" : ""}
      </div>
    </>
  );
}

export default OrderProductRow;
