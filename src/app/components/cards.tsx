import Image from "next/image";

interface ImageCardProps {
  image: string;
  alt: string;
  text: React.ReactNode;
}
interface TextCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
}
interface TextCardProps {
  description: React.ReactNode;
}

interface ColoredTextCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  properties?: React.ReactNode;
}
interface TextImageCardProps {
  image: string;
  alt: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function ImageCard({ image, alt, text }: ImageCardProps) {
  return (
    <div className="rounded-lg shadow-2xl overflow-hidden ">
      {/* Top image section */}
      <div className="bg-slate-800 flex justify-center items-center" style={{ height: 256 }}>
        <Image
          src={image}
          alt={alt}
          width={256}
          height={256}
          className="p-6"
        />
      </div>
      {/* Divider */}
      <div className="h-2 bg-slate-800" />
      {/* Text section */}
      <div className="bg-slate-900 p-6 min-h-42">
        {text}
      </div>
    </div>
  );
}

export function BgImageCard({ image, alt, text }: ImageCardProps) {
  return (
    <div className="rounded-lg shadow-2xl overflow-hidden">
      {/* Top image section */}
      <div className="relative bg-slate-800 flex justify-center items-center" style={{ height: 256 }}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      {/* Divider */}
      <div className="h-2 bg-slate-800" />
      {/* Text section */}
      <div className="bg-slate-900 p-6 min-h-42">
        {text}
      </div>
    </div>
  );
}

export function ImageTextCard({ image, alt, title, description }: TextImageCardProps) {
  return (
    <div className="rounded-lg shadow-2xl">
      {/* Top image section */}
      <div className="relative bg-slate-800 flex justify-center items-center" style={{ height: 256 }}>
        <Image
          src={image}
          alt={alt}
          width={256}
          height={256}
          className="p-6"
        />
        <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-4xl font-bold">
          {title}
        </p>
      </div>
      {/* Divider */}
      <div className="h-2 bg-slate-800" />
      {/* Text section */}
      <div className="bg-slate-900 p-6 min-h-96">
        {description}
      </div>
    </div>
  );
}

export function BgImageTextCard({ image, alt, title, description }: TextImageCardProps) {
  return (
    <div className="rounded-lg shadow-2xl bg-slate-900 flex flex-col">
      {/* Top image section */}
      <div className="relative bg-slate-800 flex justify-center items-center" style={{ height: 256 }}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
        <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-4xl font-bold">
          {title}
        </p>
      </div>
      {/* Divider */}
      <div className="h-2 bg-slate-800" />
      {/* Text section */}
      <div className="bg-slate-900 p-6 flex-grow">
        {description}
      </div>
    </div>
  );
}

export function BgImageTextCardShaded({ image, alt, title, description }: TextImageCardProps) {
  return (
    <div className="rounded-lg shadow-2xl overflow-hidden flex flex-col">
      {/* Top image section */}
      <div className="relative bg-slate-800 flex justify-center items-center" style={{ height: 256 }}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover brightness-50"
        />
        <p className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-4xl font-bold">
          {title}
        </p>
      </div>
      {/* Divider */}
      <div className="h-2 bg-slate-800" />
      {/* Text section */}
      <div className="bg-slate-900 p-6 flex-grow">
        {description}
      </div>
    </div>
  );
}

export function TextCard({ title, description }: TextCardProps) {
  return (
    <div className="rounded-lg shadow-2xl overflow-hidden ">
      {/* Top image section */}
      <div className="bg-slate-800 flex justify-center items-center">
        <h2 className="text-4xl font-bold text-white p-6">
          {title}
        </h2>
      </div>
      {/* Divider */}
      <div className="h-2 bg-slate-800" />
      {/* Text section */}
      <div className="bg-slate-900 p-6 min-h-42">
        {description}
      </div>
    </div>
  );
}

export function ColoredTextCard({ title, properties, description }: ColoredTextCardProps) {
  return (
    <div className="rounded-lg shadow-2xl overflow-hidden ">
      {/* Top image section */}
      <div className={`${properties} flex justify-center items-center`}>
        <h2 className="relative bottom-1 text-4xl font-bold text-white p-6">
          {title}
        </h2>
      </div>
      {/* Text section */}
      <div className="bg-slate-900 p-6 min-h-42">
        {description}
      </div>
    </div>
  );
}

export function TextCard2({ description }: ColoredTextCardProps) {
  return (
    <div className="rounded-lg shadow-2xl overflow-hidden ">
      {/* Top image section */}
      <div className={`bg-slate-900 p-6`}>
        {description}
      </div>
    </div>
  );
}