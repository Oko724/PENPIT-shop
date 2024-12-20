import { useAppSelector } from "../hooks";

const ShopFilterAndSort = ({
  sortCriteria,
  setSortCriteria,
}: {
  sortCriteria: string;
  setSortCriteria: (value: string) => void;
}) => {
  const { showingProducts, totalProducts } = useAppSelector(state => state.shop)
  return (
    <div className="flex justify-between items-center px-5 max-sm:flex-col max-sm:gap-5">
      <p className="text-lg">แสดงผล 1–{ showingProducts } of { totalProducts } ผลลัพธ์</p>
      <div className="flex gap-3 items-center">
        <p>เรียงลำดับจาก :</p>
        <div className="relative">
          <select
            className="border border-[rgba(0,0,0,0.40)] px-2 py-1"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSortCriteria(e.target.value)
            }
            value={sortCriteria}
          >
            <option value="default">ค่าเริ่มต้น</option>
            <option value="popularity">ความนิยม</option>
            <option value="price-asc">ราคา: ต่ำ - สูง</option>
            <option value="price-desc">ราคา: สูง - ต่ำ</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default ShopFilterAndSort;
