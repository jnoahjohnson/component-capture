import { LoaderFunction } from "remix";
import puppeteer from "puppeteer";

export const loader: LoaderFunction = async ({ params }) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`http://localhost:3000/${params.data ?? "123"}`, {
    waitUntil: "networkidle2",
  });

  await page.setViewport({ width: 900, height: 237, deviceScaleFactor: 2 });

  let pdf = await page.screenshot();

  await browser.close();

  return new Response(pdf, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
    },
  });
};
