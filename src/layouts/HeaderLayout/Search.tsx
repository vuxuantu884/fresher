import styled from "styled-components";
import { Input } from "antd";
import { IConSearch } from "component";
import { theme } from "styles";
const { Search } = Input;

export const HeaderSearch = () => {
  return (
    <StyledHeaderSearch>
      <Search
        addonBefore={<IConSearch color={theme.colors.gray_1} />}
        placeholder="Tìm kiếm"
        allowClear
        enterButton
      />
    </StyledHeaderSearch>
  );
};

const StyledHeaderSearch = styled.div`
  background-color: #fff;
  padding: 0 1.6rem 0.6rem 1.6rem;
  .ant-input-affix-wrapper,
  .ant-input-affix-wrapper-focus {
    padding: 10px !important;
    border: none;
    outline: none;
    box-shadow: initial;
    background: transparent;
  }
  .ant-input-group-addon {
    border: none;
    background-color: transparent;
  }
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border-color: initial;
  }
  .ant-input-group-wrapper.ant-input-search {
    background-color: ${(p) => p.theme.colors.gray_4};
    border-radius: 0.4rem;
    overflow: hidden;
  }
  .ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button:not(.ant-btn-primary) {
    border: none;
    background: transparent;
  }
  .ant-input-suffix {
    display: none;
  }
  .ant-input,
  .ant-input::placeholder {
    background: transparent;
    color: #828282;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
  }
  .ant-input-group-addon:last-child {
    background-color: ${(p) => p.theme.colors.primary};
  }
  .ant-btn-primary {
    background-color: transparent;
    border-color: initial;
    box-shadow: inherit;
    border: none;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
