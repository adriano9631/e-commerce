import styled from "styled-components/macro";
import Image from "next/image";
import cameraIcon from "public/icons/camera.svg";

export const AccountHeaderContainer = styled.header``;

export const ProfileCardWrapper = styled.div`
  background-color: #700e0e;
  padding: 40px;
  padding-top: 50px;
`;

export const AccountInfoWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
export const Avatar = styled(Image)``;

export const NameEmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

export const Name = styled.p`
  font-size: 28px;
  color: #fff;
`;

export const Email = styled.p`
  font-size: 18px;
  color: #fff;
`;

export const CameraIcon = styled(cameraIcon)`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  opacity: 0;
`;

export const FileInputCameraIconWrapper = styled.div`
  height: 50%;
  position: absolute;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  transition: all 0.1s;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover ${CameraIcon} {
    opacity: 1;
  }
`;

export const FileInput = styled.input`
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  text-indent: -120px;
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  /* margin-top: 20px; */
  margin-left: 20px;
  column-gap: 30px;
`;

export const NavLink = styled.a<{ isActive: boolean }>`
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  padding-top: 15px;
  color: ${(props) => props.isActive && "var(--primary-color)"};
  border-top: ${(props) =>
    props.isActive
      ? "5px solid var(--primary-color)"
      : "5px solid transparent"};
  &:hover {
    border-top: 5px solid var(--primary-color);
  }
`;
