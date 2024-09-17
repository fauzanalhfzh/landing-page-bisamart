import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Azrul",
    status: "Mahasiswa",
    body: " Wah belanja di BisaMart memang siip, baru pertama kali langsung udah dibikin senang. Packingnya baik",
    img: "/images/placeholder-person.png",
  },
  {
    name: "Zen",
    status: "Mahasiswa",
    body: "Pengalaman belanja yang menyenangkan di BisaMart. Banyak promo menarik, dan barangnya lengkap!",
    img: "/images/placeholder-person.png",
  },
  {
    name: "Rizal",
    status: "Mahasiswa",
    body: "BisaMart top banget! Produk berkualitas, harga bersahabat, dan pengirimannya cepat.",
    img: "/images/placeholder-person.png",
  },
  {
    name: "Siti",
    status: "Ibu Rumah Tangga",
    body: "Produk di BisaMart lengkap banget! Harga juga terjangkau. Pasti bakal belanja lagi.",
    img: "/images/placeholder-person.png",
  },
  {
    name: "Rizky",
    status: "Karyawan Swasta",
    body: "BisaMart kirimnya cepat dan barangnya sesuai deskripsi. Mantap!",
    img: "/images/placeholder-person.png",
  },
  {
    name: "Fadhil",
    status: "Mahasiswa",
    body: "Seneng banget belanja di BisaMart. Banyak diskon dan cashbacknya.",
    img: "/images/placeholder-person.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  status,
  body,
}: {
  img: string;
  name: string;
  status: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={img}
          width={32}
          height={32}
          alt="person"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{status}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.status} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.status} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
