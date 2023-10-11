import HeaderWrapper from "../ui/HeaderWrapper";
import Heading from "../ui/Heading";
import MainSection from "../ui/MainSection";
import ListSalaryHeader from "../features/Salary/ListSalaryHeader";
import SalaryRow from "../features/Salary/SalaryRow";
function SalaryPage() {
  return (
    <>
      <HeaderWrapper>
        <Heading>Salary Page</Heading>
      </HeaderWrapper>
      <MainSection>
        <div className="grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr,auto]">
          <ListSalaryHeader />
          <SalaryRow />
          <SalaryRow />
          <SalaryRow />
        </div>
      </MainSection>
    </>
  );
}

export default SalaryPage;
