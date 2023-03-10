// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gzk14oXgaAXzvGY4rg9Zpf
// Component: jwdOlP8e8I
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsbai21PvFaWEr } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: BAI21pvFA_wEr/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_sparq.module.css"; // plasmic-import: gzk14oXgaAXzvGY4rg9Zpf/projectcss
import sty from "./PlasmicThankYou.module.css"; // plasmic-import: jwdOlP8e8I/css

export const PlasmicThankYou__VariantProps = new Array();

export const PlasmicThankYou__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicThankYou__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbai21PvFaWEr()
  });
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicThankYou.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicThankYou.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicThankYou.pageMetadata.title}
        />

        <meta
          key="description"
          name="description"
          content={PlasmicThankYou.pageMetadata.description}
        />

        <meta
          key="og:description"
          property="og:description"
          content={PlasmicThankYou.pageMetadata.description}
        />

        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicThankYou.pageMetadata.description}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicThankYou.pageMetadata.ogImageSrc}
        />

        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicThankYou.pageMetadata.ogImageSrc}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__ttaXo)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "desktopOnly")
                  ? "150px"
                  : "130px"
              }
              loading={"lazy"}
              src={{
                src: "/plasmic/sparq/images/httpsAppunbouncecomPublishAssets4E7205Ac893811EdB5B00242A3C829A53U3DeuSparqBlackLogo108C08C000000000000028Png.png",
                fullWidth: 300,
                fullHeight: 300,
                aspectRatio: undefined
              }}
            />

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__i5Hjq)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"50px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/sparq/images/eMail1F4E7Png.png",
                fullWidth: 160,
                fullHeight: 160,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tFk3L
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#FFFFFF", fontWeight: 700 }}
                >
                  {"Check Your Email"}
                </span>
              </React.Fragment>
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___870Ka
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#FFFFFF", fontWeight: 700 }}
                >
                  {"We Sent You An Offer."}
                </span>
              </React.Fragment>
            </div>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "section"],
  section: ["section"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicThankYou__ArgProps,
          internalVariantPropNames: PlasmicThankYou__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicThankYou__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicThankYou";
  } else {
    func.displayName = `PlasmicThankYou.${nodeName}`;
  }
  return func;
}

export const PlasmicThankYou = Object.assign(
  // Top-level PlasmicThankYou renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    // Metadata about props expected for PlasmicThankYou
    internalVariantProps: PlasmicThankYou__VariantProps,
    internalArgProps: PlasmicThankYou__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Claim offer",
      description: "Check Your Email. We Sent You An offer",
      ogImageSrc:
        "https://site-assets.plasmic.app/a6f2cab224eeb7b022dfd5ca826b33f4.jpg",
      canonical: ""
    }
  }
);

export default PlasmicThankYou;
/* prettier-ignore-end */
