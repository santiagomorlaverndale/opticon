import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { DefaultColumnProps } from "../displayTemplates";

export const DefaultColumn : CmsLayoutComponent<DefaultColumnProps> = ({ contentLink, layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:column vb:column:DefaultColumn">{ children }</div>);
}

export default DefaultColumn;