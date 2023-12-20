import { ButtonLink } from "components/ButtonLink";
import Link from "next/link";
import { useState } from "react";
import { FaHouseUser, FaHeart, FaBars, FaCross, FaTimes } from "react-icons/fa";

export const MainMenu = ({
  items,
  callToActionLabel,
  callToActionDestination,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex items-center">
        <div className="py-4 pl-5 flex text-pink-600">
          <FaHouseUser size={30} />
          <FaHeart size={30} />
        </div>
        <div className="flex flex-1 justify-end md:hidden relative">
          <FaBars
            size={30}
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          />
          {!!isMobileMenuOpen && (
            <div className="w-full fixed overflow-auto max-h-screen bg-black left-0 top-0 pt-20">
              <FaTimes
                className="fixed top-4 right-4 cursor-pointer z-10"
                size={35}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {(items || []).map((item) => (
                <div key={item.id} className="cursor-pointer relative group">
                  <div>
                    <Link href={item.destination} className="p-5 block">
                      {item.label}
                    </Link>
                  </div>
                  {!!item.subMenuItems?.length && (
                    <div className="pl-10">
                      {item.subMenuItems.map((subMenuItem) => (
                        <Link
                          key={subMenuItem.id}
                          href={subMenuItem.destination}
                          className="block whitespace-nowrap p-5 "
                        >
                          {subMenuItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="p-4">
                <ButtonLink
                  destination={callToActionDestination}
                  label={callToActionLabel}
                  fullWidth
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 justify-end hidden md:flex">
          {(items || []).map((item) => (
            <div
              key={item.id}
              className="hover:bg-slate-700 cursor-pointer relative group"
            >
              <div>
                <Link href={item.destination} className="p-5 block">
                  {item.label}
                </Link>
              </div>
              {!!item.subMenuItems?.length && (
                <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3">
                  {item.subMenuItems.map((subMenuItem) => (
                    <Link
                      key={subMenuItem.id}
                      href={subMenuItem.destination}
                      className="block whitespace-nowrap p-5 hover:bg-slate-700"
                    >
                      {subMenuItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="ml-3 my-auto">
            <ButtonLink
              destination={callToActionDestination}
              label={callToActionLabel}
            />
          </div>
        </div>
      </div>
    </>
  );
};
