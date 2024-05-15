// import styles from "./styles.module.css";
// import { Props } from "@theme/BlogPostPage";

// export default function blogPostComponent(props: {
//   items: Props[];
// }): JSX.Element {
//   const { items = [] } = props;
//   console.log(items);
//   return (
//     <div>
//       {items.map((i) => {
//         return (
//           <div key={i?.content?.metadata?.source}>
//             {i.content?.frontMatter?.title}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogListPaginator from "@theme/BlogListPaginator";
import { Props } from "@theme/BlogPostPage";

function BlogListPage(props) {
  const { metadata, items = [] } = props;

  return (
    <Layout title="Blog" description="Blog">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            {items.map((i) => {
              return (
                <div key={i?.content?.metadata?.source}>
                  {i.content?.frontMatter?.title}
                </div>
              );
            })}
            <BlogListPaginator metadata={metadata} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;
