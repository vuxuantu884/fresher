import useHome from "handlers/home/home.hooks";
import { HeaderLayoutWeb } from "layouts/HeaderLayoutWeb";

function HomeScreenWeb() {
  const {} = useHome();

  return <>Home Screen PC</>;
}

export default HomeScreenWeb;
