/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ICommune } from "./interfaces/gouv-data.interface";
export namespace Components {
    interface AppHome {
        "reportData": ICommune[];
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface SingleCommune {
        "data": any;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLSingleCommuneElement extends Components.SingleCommune, HTMLStencilElement {
    }
    var HTMLSingleCommuneElement: {
        prototype: HTMLSingleCommuneElement;
        new (): HTMLSingleCommuneElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "single-commune": HTMLSingleCommuneElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
        "reportData"?: ICommune[];
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface SingleCommune {
        "data"?: any;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "single-commune": SingleCommune;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "single-commune": LocalJSX.SingleCommune & JSXBase.HTMLAttributes<HTMLSingleCommuneElement>;
        }
    }
}
