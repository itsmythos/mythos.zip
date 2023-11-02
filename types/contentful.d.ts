// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface ICodeFields {
  /** Internal Name */
  internalName: string;

  /** Text */
  text: string;

  /** Show Line Numbers */
  showLineNumbers?: boolean | undefined;

  /** Show Copy Button */
  showCopyButton?: boolean | undefined;

  /** Language */
  language:
    | "bash"
    | "c"
    | "clojure"
    | "cpp"
    | "csharp"
    | "dart"
    | "elixir"
    | "elm"
    | "erlang"
    | "fsharp"
    | "graphql"
    | "go"
    | "groovy"
    | "haskell"
    | "html"
    | "java"
    | "javascript"
    | "jsx"
    | "julia"
    | "kotlin"
    | "lisp"
    | "makefile"
    | "matlab"
    | "objectivec"
    | "ocaml"
    | "php"
    | "python"
    | "r"
    | "ruby"
    | "rust"
    | "scala"
    | "sql"
    | "swift"
    | "tsx"
    | "typescript";

  /** Word Wrap */
  wordWrap?: boolean | undefined;
}

/** To display a code snippet. */

export interface ICode extends Entry<ICodeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "code";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentAuthorFields {
  /** Internal name */
  internalName: string;

  /** Name */
  name: string;

  /** Avatar */
  avatar?: Asset | undefined;
}

/** To have author-related properties */

export interface IComponentAuthor extends Entry<IComponentAuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentAuthor";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentRichImageFields {
  /** Internal name */
  internalName: string;

  /** Image */
  image: Asset;

  /** Caption */
  caption?: string | undefined;

  /** Full width */
  fullWidth?: boolean | undefined;
}

/** To describe an image used in rich text fields */

export interface IComponentRichImage extends Entry<IComponentRichImageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentRichImage";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentSectionHeaderFields {
  /** Internal Name */
  internalName: string;

  /** Title */
  title: string;

  /** Table of Contents Title */
  tableOfContentsTitle?: string | undefined;
}

/** Inserts a title & gets listed in the table of contents. */

export interface IComponentSectionHeader
  extends Entry<IComponentSectionHeaderFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentSectionHeader";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentSeoFields {
  /** Internal name */
  internalName: string;

  /** Application Name */
  applicationName: string;

  /** Page title */
  pageTitle: string;

  /** Page description */
  pageDescription?: string | undefined;

  /** Keywords */
  keywords: string[];

  /** Referrer */
  referrer: "origin-when-cross-origin";

  /** Creator */
  creator: string;

  /** Publisher */
  publisher: string;

  /** Robots */
  robots: IComponentSeoRobots;

  /** Twitter */
  twitter: IComponentSeoTwitter;

  /** Open Graph */
  openGraph: IComponentSeoOpenGraph;
}

/** To have SEO-related properties to the pages we render */

export interface IComponentSeo extends Entry<IComponentSeoFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentSeo";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentSeoOpenGraphFields {
  /** Internal Name */
  internalName: string;

  /** Title */
  title: string;

  /** Description */
  description: string;

  /** Site Name */
  siteName: string;
}

export interface IComponentSeoOpenGraph
  extends Entry<IComponentSeoOpenGraphFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentSeoOpenGraph";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentSeoRobotsFields {
  /** Internal Name */
  internalName: string;

  /** follow */
  follow: boolean;

  /** index */
  index: boolean;

  /** cache */
  cache?: boolean | undefined;

  /** Max Image Preview */
  maxImagePreview: "large";
}

export interface IComponentSeoRobots extends Entry<IComponentSeoRobotsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentSeoRobots";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentSeoTwitterFields {
  /** Internal Name */
  internalName: string;

  /** Title */
  title: string;

  /** Description */
  description: string;

  /** Site ID */
  siteId?: string | undefined;

  /** Creator */
  creator?: string | undefined;

  /** Creator ID */
  creatorId?: string | undefined;

  /** Card */
  card: "summary_large_image" | "summary" | "app" | "player";
}

export interface IComponentSeoTwitter
  extends Entry<IComponentSeoTwitterFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentSeoTwitter";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IComponentTagFields {
  /** Name */
  name: string;

  /** Internal Only */
  internalOnly?: boolean | undefined;
}

/** To logically group posts. */

export interface IComponentTag extends Entry<IComponentTagFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "componentTag";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageBlogPostFields {
  /** Internal name */
  internalName: string;

  /** Slug */
  slug: string;

  /** Title */
  title: string;

  /** Subtitle */
  shortDescription?: string | undefined;

  /** Published date */
  publishedDate: string;

  /** Read Length */
  readLength: number;

  /** Content */
  content: Document;

  /** Author */
  author: IComponentAuthor;

  /** Featured image */
  featuredImage: Asset;

  /** Show Featured Image */
  showFeaturedImage: boolean;

  /** Related blog posts */
  relatedBlogPosts?: IPageBlogPost[] | undefined;

  /** Tags */
  tags?: IComponentTag[] | undefined;

  /** SEO fields */
  seoFields: IComponentSeo;
}

/** To create individual blog posts */

export interface IPageBlogPost extends Entry<IPageBlogPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageBlogPost";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageLandingFields {
  /** Internal name */
  internalName: string;

  /** SEO fields */
  seoFields: IComponentSeo;

  /** Featured blog post */
  featuredBlogPost?: IPageBlogPost | undefined;
}

/** To have an entry point for the app (e.g. Homepage) */

export interface IPageLanding extends Entry<IPageLandingFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageLanding";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "code"
  | "componentAuthor"
  | "componentRichImage"
  | "componentSectionHeader"
  | "componentSeo"
  | "componentSeoOpenGraph"
  | "componentSeoRobots"
  | "componentSeoTwitter"
  | "componentTag"
  | "pageBlogPost"
  | "pageLanding";

export type IEntry =
  | ICode
  | IComponentAuthor
  | IComponentRichImage
  | IComponentSectionHeader
  | IComponentSeo
  | IComponentSeoOpenGraph
  | IComponentSeoRobots
  | IComponentSeoTwitter
  | IComponentTag
  | IPageBlogPost
  | IPageLanding;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
