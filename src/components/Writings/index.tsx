import Button from "../Button";
import PostsLoop from "../PostsLoop";
const feed = "https://feed.miantiao.me/";

const Writings = () => {
  return (
    <section className="max-w-4xl mx-auto px-7 lg:px-0">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-neutral-900 dark:text-neutral-100">
        My Writings
      </h2>
      <p className="mb-6 text-base text-neutral-600 dark:text-neutral-400">
        Along with coding I also like to write about life and technology. Here
        are some of my recent posts.
      </p>

      <div className="w-full max-w-4xl mx-auto my-7 xl:px-0">
        <div className="flex flex-col items-start justify-start md:flex-row md:space-x-7">
          <div className="w-full md:w-2/3 space-y-7">
            <PostsLoop count="3" />

            <div className="flex items-center justify-center w-full py-5">
              <Button text="View All My Writing" link="/posts" />
            </div>
          </div>
          <div className="w-full mt-10 md:w-1/3 md:mt-0">
            <form
              method="get"
              action={feed}
              className="p-6 border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600"
            >
              <div className="relative flex items-center space-x-2">
                <svg
                  className="flex-none w-6 h-6 text-neutral-700 dark:text-neutral-200"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  ></path>
                </svg>
                <h2 className="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  Subscribe my blog
                </h2>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Get my blog updates via{" "}
                <a
                  className="font-bold"
                  href={`https://feedly.com/i/subscription/feed%2F${encodeURIComponent(
                    feed
                  )}`}
                >
                  Feedly
                </a>
                ,{" "}
                <a
                  className="font-bold"
                  href={`https://www.inoreader.com/feed/${encodeURIComponent(
                    feed
                  )}`}
                >
                  Inoreader
                </a>{" "}
                or{" "}
                <a className="font-bold" href={feed}>
                  RSS
                </a>
                .
              </p>
              <div className="flex flex-col items-center w-full mt-4 space-y-3">
                <input
                  type="url"
                  readonly
                  placeholder="Email address"
                  aria-label="Email address"
                  required=""
                  value={feed}
                  className="w-full h-10 px-3 text-sm border border-dashed rounded-md focus:ring-0 focus:outline-black border-neutral-400 dark:border-neutral-600 dark:bg-neutral-800 dark:placeholder-neutral-400 dark:text-white"
                />
                <button
                  type="submit"
                  className="block w-full px-4 py-2 mt-5 text-xs font-semibold text-center duration-300 ease-out border rounded bg-neutral-900 dark:bg-neutral-100 dark:hover:border-neutral-300 dark:text-neutral-800 dark:hover:bg-neutral-950 dark:hover:text-neutral-100 text-neutral-100 border-neutral-900 hover:bg-white hover:text-neutral-900"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Writings;
