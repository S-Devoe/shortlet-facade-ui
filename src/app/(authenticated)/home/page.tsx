import Listing, { ListingProps } from "@/components/listing/listing.component";
import { Body, Heading } from "@/components/typography";
import React from "react";

interface IListing extends ListingProps {}

const listings: IListing[] = [
  {
    name: "Jacob Mews Skypoint",
    images: [
      "/home/home.png",
      "/home/altHome.png",
      "/home/home.png",
      "/home/altHome.png",
    ],
    price: 100,
    rating: 4.6,
    reviews: 18,
    guests: 6,
    bedrooms: 3,
  },
  {
    name: "Eko Atlantic Shortstays",
    images: [
      "/home/altHome.png",
      "/home/home.png",
      "/home/altHome.png",
      "/home/home.png",
    ],
    price: 100,
    rating: 4.6,
    reviews: 18,
    guests: 6,
    bedrooms: 3,
  },
];

export default function Home() {
  return (
    <div className="pt-10 pb-16">
      <section className="mb-6">
        <Heading level={5} className="!font-serif">
          Howdy,{" "}
          <span className="text-primary-lighter font-serif">Benjamin!</span>
        </Heading>
        <Body
          level={2}
          text={"Find your next hassle free vacation home on Shortlet"}
        />
      </section>
      <section>
        <div className="grid gid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {listings
            .concat(listings)
            .concat(listings)
            .map((listing, index) => (
              <Listing key={index} {...listing} />
            ))}
        </div>
      </section>
    </div>
  );
}
