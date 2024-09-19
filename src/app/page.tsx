'use server';

import { API_URL } from "@/utils/constants";
import MainPage from "@/views/main";

const fetchData = async () => {
  const response = await fetch(`${API_URL}?results=10`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};

export default async function Home() {
  const namesData = await fetchData();

  return <MainPage namesData={namesData?.results ?? []} />;
}
