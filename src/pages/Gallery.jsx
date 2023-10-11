import HeaderWrapper from "../ui/HeaderWrapper";
import Button from "../ui/Button";
import SearchForm from "../ui/SearchForm";

import TableHeader from "../features/Gallery/TableHeader";
import ProductTable from "../features/Gallery/ProductTable";
import CreateProductForm from "../features/Gallery/CreateProductForm";

import { HiOutlinePlus } from "react-icons/hi2";
import { useState } from "react";

function Gallery() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      {showModal && <CreateProductForm setShowModal={setShowModal} />}
      <HeaderWrapper>
        <h1 className="text-3xl">Gallery</h1>
        <SearchForm
          // query={query}
          // setQuery={setQuery}
          placeholder="Nhập tên sản phẩm"
        />
      </HeaderWrapper>

      <section className="rounded-md border border-b-0 bg-teal-50">
        <div className="grid grid-cols-[0.7fr,2.6fr,1fr,1fr,1fr] items-center justify-around gap-x-8 border-b px-4 py-3 text-lg sm:grid-cols-[1fr,1.2fr,1fr,1fr,0.2fr] sm:gap-x-2 sm:gap-y-2 sm:px-1 sm:text-base">
          <TableHeader />
          <ProductTable />
        </div>
      </section>
      <div className="my-4">
        <Button
          type="primary"
          icon={<HiOutlinePlus size={24} stroke="#f0fdfa" />}
          onClick={() => setShowModal(true)}
        >
          Add New
        </Button>
      </div>
    </>
  );
}

export default Gallery;
