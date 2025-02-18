'use client';

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      {/* Eyebrow text with a bright blue gradient */}
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-blue-400 to-sky-400 text-center text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-gray-50">
        {title}
      </h2>

      <p className="text-center md:text-lg lg:text-xl text-gray-300 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
