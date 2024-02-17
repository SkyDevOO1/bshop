"use client";
import Link from "next/link";
import { useState } from "react";
import {
  RiArrowRightLine,
  RiCloseFill,
  RiMenuFill,
  RiUser6Fill,
} from "react-icons/ri";
import { Button } from "../../design/Button/Button";
import Container from "../container/container";

export const Navigation = () => {
  const [istoogle, setIsToogle] = useState(false);

  return (
    <>
      <nav className="relative  gap-8 px-5 py-2 border-b-2 border-gray-100">
        <Container className="flex items-center justify-between">
          <div>
            <Link
              href={"/"}
              className="pacifico-regular text-3xl trans text-primary-900 hover:text-primary"
            >
              Bshop
            </Link>
          </div>
          <div className="flex items-center justify-between gap-8">
            <div className="hidden lg:flex items-center gap-7">
              <ul className="flex items-center gap-3 font-medium">
                <li>
                  <Link
                    href={"#"}
                    className="font-medium trans hover:text-primary"
                  >
                    Boutique
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/mon-espace"}
                    className="font-medium trans hover:text-primary"
                  >
                    Mon espace
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/mon-espace/contact-nous"}
                    className="font-medium trans hover:text-primary"
                  >
                    Contactez-nous
                  </Link>
                </li>
              </ul>
              <ul className="flex items-center gap-2">
                <li>
                  <Link href={"/mon-espace/connexion"}>
                    <Button icon={{ icon: RiArrowRightLine }}>Connexion</Button>
                  </Link>
                </li>
                <li>
                  <Link href={"/mon-espace/inscription"}>
                    <Button variant="secondary" weight="medium">
                      Rejoindre
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="lg:hidden sm:block">
              <li
                className="cursor-pointer"
                onClick={() => setIsToogle(!istoogle)}
              >
                {istoogle ? (
                  <RiCloseFill size={35} />
                ) : (
                  <RiMenuFill size={35} />
                )}
              </li>
            </ul>
          </div>
          {/* DROPDOWN MENU */}
          {istoogle && (
            <div className="absolute top-20 right-5 z-50 border-2 border-gray-100 px-5 py-3 w-72 rounded bg-gray-50">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href={"#"}
                    className="font-medium trans hover:text-primary"
                  >
                    Boutique
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="font-medium trans hover:text-primary"
                  >
                    Contactez-nous
                  </Link>
                </li>
              </ul>
              <hr className="my-3" />
              <Link
                href={"profil"}
                className="z-10 p-2 rounded-full flex items-center justify-between gap-3 font-semibold trans hover:bg-gray-100"
              >
                <span className="p-1 bg-gray-100 rounded-full">
                  <RiUser6Fill />
                </span>
                <span>Nouhou Diallo</span>
              </Link>
            </div>
          )}
        </Container>
      </nav>
    </>
  );
};
