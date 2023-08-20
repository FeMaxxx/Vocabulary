import { FC, useEffect, useState } from "react";
import { ButtonIcon, ButtonText } from "../Buttons";
import { useRouter } from "next/router";
import { useGlobalState } from "@/globalState";
import { Portal } from "../Modals/Portal";
import { gsap } from "gsap";
import { NavigationModal } from "../Modals";
import {
  Nav,
  LogoutBtn,
  LogoutFirst,
  LogoutSecond,
  BurgerBtn,
  TopLine,
  MiddleLine,
  BottomLine,
} from "./Navigation.styled";

export const Navigation: FC = () => {
  const [navigationModalOpen, setNavigationModalOpen] = useState(false);
  const router = useRouter();
  const { isLogedIn, logout } = useGlobalState();

  const handleLogout = () => {
    logout();
  };

  const handleBurgerBtn = () => {
    setNavigationModalOpen(!navigationModalOpen);
  };

  useEffect(() => {
    const el = document.querySelector(".burgerBtn");
    if (!el) return;

    if (navigationModalOpen) {
      gsap.to(".burgerBtn", {
        zIndex: 100,
      });
      gsap.to(".burgerTopLine", {
        duration: 0.2,
        rotate: 45,
        y: 9,
      });
      gsap.to(".burgerMiddleLine", {
        width: 0,
        duration: 0.2,
        rotate: -45,
      });
      gsap.to(".burgerBottomLine", {
        duration: 0.2,
        rotate: -45,
        y: -9,
      });
    } else {
      gsap.to(".burgerBtn", {
        zIndex: 0,
      });
      gsap.to(".burgerTopLine", {
        duration: 0.2,
        rotate: 0,
        y: 0,
      });
      gsap.to(".burgerMiddleLine", {
        duration: 0.2,
        width: "80%",
        rotate: 0,
      });
      gsap.to(".burgerBottomLine", {
        duration: 0.2,
        rotate: 0,
        y: 0,
      });
    }
  }, [navigationModalOpen]);

  return (
    <>
      <Nav>
        {isLogedIn === false && (
          <>
            <ButtonIcon
              isActive={router.pathname === "/"}
              icon="home"
              navigateTo="/"
            />
            <ButtonIcon
              isActive={router.pathname === "/info"}
              icon="info"
              navigateTo="/info"
            />
            <ButtonText
              isActive={router.pathname === "/register"}
              text="register"
              navigateTo="/register"
            />
            <ButtonText
              isActive={router.pathname === "/login"}
              text="log-in"
              navigateTo="/login"
            />
          </>
        )}

        {isLogedIn === true && (
          <>
            <ButtonIcon
              isActive={router.pathname === "/learning"}
              icon="pan"
              navigateTo="/learning"
            />
            <ButtonIcon
              isActive={router.pathname === "/vocabulary"}
              icon="book"
              navigateTo="/vocabulary"
            />
            <ButtonIcon
              isActive={router.pathname === "/profile"}
              icon="headSmile"
              navigateTo="/profile"
            />
            <LogoutBtn onClick={handleLogout}>
              <LogoutFirst />
              <LogoutSecond />
            </LogoutBtn>
          </>
        )}
      </Nav>

      <Portal>
        <BurgerBtn className="burgerBtn" tabIndex={2} onClick={handleBurgerBtn}>
          <TopLine className="burgerTopLine" />
          <MiddleLine className="burgerMiddleLine" />
          <BottomLine className="burgerBottomLine" />
        </BurgerBtn>
      </Portal>

      <NavigationModal
        isOpen={navigationModalOpen}
        onClose={() => setNavigationModalOpen(false)}
      />
    </>
  );
};
