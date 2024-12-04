import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
type Props = {
  label: string;
  showBackArrow?: boolean;
}
export const HeaderView = ({ label, showBackArrow }: Props) => {
  return (
    <>
      <div className="border-b-[1px] px-[16px] pt-[10px] border-neutral-800">
        <Link href="/" className="flex flex-row items-center gap-2">
          {showBackArrow && (
            <div className="cursor-pointer hover:opacity-70 transition">
              <BiArrowBack size={24} color="#000" />
            </div>
          )}
          <h1 className="text-black text-xl font-semibold">{label}</h1>
        </Link>
      </div>
    </>
  );
}