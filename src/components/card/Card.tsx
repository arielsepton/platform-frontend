/// <reference types="vite-plugin-svgr/client" />
import Thumbnail from "@/assets/account-thumbnails/color-3.svg?react";
import MoreInfoDots from "@/assets/moreInfo_dots.svg?react";
import Typography from "@components/typography/Typography";
import React, { useRef, useState } from "react";
import Menu from "@components/menu/Menu";

interface CardProps {
  name: string;
  anaf?: string;
  mador?: string;
  info?: string;
  capp?: string;
}

const Card: React.FC<CardProps> = React.memo(
  ({ name, anaf, mador, capp, info }: CardProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleButtonRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <div className="flex flex-col rounded-md bg-mono/basic-16 border border-mono/basic-10 grow">
        <div className="flex items-center pr-2 pt-2 flex-none ml-auto">
          <div onClick={toggleMenu} ref={toggleButtonRef}>
            <Typography
              className={`cursor-pointer ${isMenuOpen ? "rounded-full bg-mono/basic-11 text-green/basic-6" : "text-mono/basic-4"}`}
            >
              <MoreInfoDots />
            </Typography>
          </div>
          {isMenuOpen && (
            <Menu
              items={[
                "view applications",
                "members",
                "secrets",
                "divider",
                "settings",
              ]}
              isOpen={isMenuOpen}
              toggleButtonRef={toggleButtonRef}
            />
          )}
        </div>
        <div className="flex flex-none pl-5 pb-8 flex-col flex-grow overflow-hidden">
          <div className="flex flex-row">
            <div className="relative flex justify-center items-center">
              <Thumbnail />
              <div className="text-white absolute inset-0 flex justify-center items-center">
                {name[0].toUpperCase()}
              </div>
            </div>

            <div className="flex flex-col pl-2.25 flex-grow overflow-hidden">
              <Typography
                variant="headline-xs"
                className="text-mono/basic-1 mb-1 truncate"
              >
                {name}
              </Typography>
              {anaf && mador && (
                <Typography
                  variant="label-md"
                  className="text-mono/basic-5 truncate"
                >
                  {anaf} | {mador}
                </Typography>
              )}
              {capp && (
                <Typography
                  variant="label-md"
                  className="text-mono/basic-5 bg-mono/basic-13 rounded-full w-min py-1.5 px-3 truncate"
                >
                  {capp}
                </Typography>
              )}
              {info && (
                <div className="border border-mono/basic-10">
                  <Typography variant="body-md">{info}</Typography>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
