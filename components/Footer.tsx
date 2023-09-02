import Link from "next/link";
import Container from "./Container";
import CustomText from "./CustomText";
import CustomHeading from "./CustomHeading";
import Newsletter from "./Newsletter";
import { FOOTERLINKS } from "@/constants/footerLinks";

export default function Footer() {
  return (
    <footer className="bg-gray">
      <Container>
        <div className="py-14">
          <div className="flex flex-wrap gap-x-6 sm:gap-x-[146px] gap-y-6">
            <div className="gap-3 w-full max-w-[345px]">
              <CustomHeading variant="h4" className="mb-6">
                <Link href="/">Acheter</Link>
              </CustomHeading>

              <Newsletter />
            </div>

            <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
              {FOOTERLINKS.map(({ title, links }) => (
                <div key={title} className="flex-shrink-0">
                  <CustomText variant="subtitle" weight="medium">
                    {title}
                  </CustomText>

                  <ul className="mt-6">
                    {links.map((link) => (
                      <li key={link}>{link}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-9 space-y-5">
          <div className="flex justify-between">
            @{new Date().getFullYear()} All rights reserved. Designed by Figma
            Community.
          </div>

          <CustomText className="text-center">
            Developed with 💖 by{" "}
            <Link
              href="https://twitter.com/dev_willman"
              target="_blank"
              rel="noreferrer"
            >
              William M. Tsikata
            </Link>
          </CustomText>
        </div>
      </Container>
    </footer>
  );
}
