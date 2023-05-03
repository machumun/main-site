import { NextPage } from "next";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const id = router.query;
  return <>{id}</>;
};
