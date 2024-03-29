import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";
import TextField from "components/TextField";

type ShopDetailItemHeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const ShopDetailItemHeader: React.FC<ShopDetailItemHeaderProps> = (props) => {
  const [searchboxvalue, setSearchboxvalue] = React.useState<string>("");

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row gap-3 items-center justify-start w-full">
          <div className="header-row mt-[22px] mb-5">
            <Text
              className="flex-1 text-bluegray-800 text-sm"
              size="txtInterMedium14Bluegray800"
            >
              Welcomback, Team!
            </Text>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="flex flex-1 flex-row gap-6 sm:hidden items-center justify-end w-full">
            <Img
              className="h-6 w-6"
              src="../public/images/img_shoppingbag.svg"
              alt="shoppingbag"
            />
            <Img
              className="h-6 w-6"
              src="../public/images/img_notification.svg"
              alt="notification"
            />
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtInterRegular16Gray500"
              >
                <span className="text-gray-500 font-inter text-left font-normal">
                  Hello,
                </span>
                <span className="text-bluegray-900 font-inter text-left font-normal">
                  {" "}
                </span>
                <span className="text-bluegray-900 font-inter text-left font-medium">
                  Sam
                </span>
              </Text>
              <div className="flex flex-col h-10 items-center justify-start rounded-[50%] w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="../public/images/img_sherlocktoyfacelow.png"
                  alt="sherlocktoyface"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

ShopDetailItemHeader.defaultProps = {};

export default ShopDetailItemHeader;
