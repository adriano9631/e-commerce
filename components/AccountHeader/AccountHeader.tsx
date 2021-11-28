import { useSession } from "next-auth/react";
import React, { useEffect, useState, FC } from "react";
import axiosInstance from "lib/axios";
import * as s from "./AccountHeader.style";
import LoadingIndicator from "components/LoadingIndicator";
import Link from "next/link";
import { useRouter } from "next/router";

type AccountHeaderProps = {
  updatedDisplayName?: string;
};

const AccountHeader: FC<AccountHeaderProps> = ({ updatedDisplayName }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(session?.user.image);
  const [isLoadingIndicator, setIsLoadingIndicator] = useState(false);

  useEffect(() => {
    if (image) {
      const uploadImage = () => {
        setIsLoadingIndicator(true);
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "e-commerce-app");
        data.append("cloud_name", "e-commerce-app");
        fetch("https://api.cloudinary.com/v1_1/e-commerce-app/image/upload", {
          method: "post",
          body: data,
        })
          .then((resp) => resp.json())
          .then((data) => {
            setUrl(data.url);
            setIsLoadingIndicator(false);
          })
          .catch((err) => console.log(err));
      };

      uploadImage();
    }
  }, [image]);

  useEffect(() => {
    const changeProfileAvatar = async () => {
      if (url) {
        try {
          await axiosInstance.put(`users/${session?.id}`, {
            url,
          });
        } catch (error: any) {
          throw new Error(error);
        }
      }
      changeProfileAvatar();
    };
  }, [url]);

  return (
    <s.AccountHeaderContainer>
      <s.ProfileCardWrapper>
        <s.AccountInfoWrapper>
          <s.AvatarWrapper>
            <s.Avatar
              src={url}
              alt="Profile avatar"
              height={110}
              width={110}
              layout="fixed"
            />
            <s.FileInputCameraIconWrapper>
              <label style={{ cursor: "pointer" }}>
                <s.FileInput
                  type="file"
                  onChange={(e: any) => setImage(e.target.files[0])}
                />
                <s.CameraIcon />
              </label>
            </s.FileInputCameraIconWrapper>
          </s.AvatarWrapper>

          <s.NameEmailWrapper>
            <s.Name>
              {updatedDisplayName ? updatedDisplayName : session?.user.name}
            </s.Name>
            <s.Email>{session?.user.email}</s.Email>
          </s.NameEmailWrapper>
        </s.AccountInfoWrapper>

        {isLoadingIndicator && <LoadingIndicator />}
      </s.ProfileCardWrapper>
      <s.NavLinksWrapper>
        <Link href="/profile/username123">
          <s.NavLink
            isActive={router.pathname === "/profile/[username]" ? true : false}
          >
            Profile
          </s.NavLink>
        </Link>
        <Link href="/account/my-account">
          <s.NavLink
            isActive={router.pathname === "/account/my-account" ? true : false}
          >
            My Account
          </s.NavLink>
        </Link>
        <Link href="/account/my-wishlist">
          <s.NavLink
            isActive={router.pathname === "/account/my-wishlist" ? true : false}
          >
            My Wishlist
          </s.NavLink>
        </Link>
      </s.NavLinksWrapper>
    </s.AccountHeaderContainer>
  );
};

export default AccountHeader;
