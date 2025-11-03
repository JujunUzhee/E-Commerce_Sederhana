import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loading() {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-4 py-5 sm:grid-cols-2 lg:grid-cols-3">
      {/* Render 6 skeleton cards */}
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex h-full flex-col rounded-xl border bg-white p-4 shadow"
          >
            {/* Bagian gambar */}
            <div className="mx-auto h-[300px] w-[80%] overflow-hidden rounded-lg">
              <Skeleton height={300} />
            </div>

            {/* Bagian bawah */}
            <div className="mt-8 flex flex-grow flex-col gap-4">
              {/* Tombol */}
              <Skeleton
                height={40}
                width={380}
                className="mx-auto rounded-lg"
              />

              {/* Judul */}
              <Skeleton height={20} width="70%" className="mx-auto" />

              {/* Harga & Rating */}
              <div className="mt-auto flex items-center gap-4">
                <Skeleton height={20} width={50} />
                <Skeleton height={20} width={50} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Loading;
