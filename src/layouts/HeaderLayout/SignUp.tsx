import { ShareButtonSub } from "component";
import { enumSize } from "constant";
import Image from "next/image";
import styled from "styled-components";

export const HeaderSignUp = () => {
  return (
    <StyledHeaderSignUp>
      <div className="image">
        <Image
          src="/images/SignUp.png"
          layout="responsive"
          width="200%"
          height="30%"
        />
      </div>
      <div className="btn-signUp">
        <ShareButtonSub
          children="button"
          size={enumSize.LARGE}
        ></ShareButtonSub>
      </div>
    </StyledHeaderSignUp>
  );
};

const StyledHeaderSignUp = styled.div`
  margin-top: 1.6rem;
  background-color: #fff;
  padding: 1.6rem 1.6rem 0 1.6rem;
  .image {
    position: relative;
  }
  .btn-signUp {
    display: flex;
    justify-content: center;
    padding: 1.2rem 0;
  }
`;
