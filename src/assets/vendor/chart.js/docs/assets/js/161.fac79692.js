(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{490:function(t,a,e){"use strict";e.r(a);var s=e(6),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"responsive-charts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#responsive-charts"}},[t._v("#")]),t._v(" Responsive Charts")]),t._v(" "),e("p",[t._v("When it comes to changing the chart size based on the window size, a major limitation is that the canvas "),e("em",[t._v("render")]),t._v(" size ("),e("code",[t._v("canvas.width")]),t._v(" and "),e("code",[t._v(".height")]),t._v(") can "),e("strong",[t._v("not")]),t._v(" be expressed with relative values, contrary to the "),e("em",[t._v("display")]),t._v(" size ("),e("code",[t._v("canvas.style.width")]),t._v(" and "),e("code",[t._v(".height")]),t._v("). Furthermore, these sizes are independent from each other and thus the canvas "),e("em",[t._v("render")]),t._v(" size does not adjust automatically based on the "),e("em",[t._v("display")]),t._v(" size, making the rendering inaccurate.")]),t._v(" "),e("p",[t._v("The following examples "),e("strong",[t._v("do not work")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('<canvas height="40vh" width="80vw">')]),t._v(": "),e("strong",[t._v("invalid")]),t._v(" values, the canvas doesn't resize ("),e("a",{attrs:{href:"https://codepen.io/chartjs/pen/oWLZaR",target:"_blank",rel:"noopener noreferrer"}},[t._v("example"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("li",[e("code",[t._v('<canvas style="height:40vh; width:80vw">')]),t._v(": "),e("strong",[t._v("invalid")]),t._v(" behavior, the canvas is resized but becomes blurry ("),e("a",{attrs:{href:"https://codepen.io/chartjs/pen/WjxpmO",target:"_blank",rel:"noopener noreferrer"}},[t._v("example"),e("OutboundLink")],1),t._v(")")]),t._v(" "),e("li",[e("code",[t._v('<canvas style="margin: 0 auto;">')]),t._v(": "),e("strong",[t._v("invalid")]),t._v(" behavior, the canvas continually shrinks. Chart.js needs a dedicated container for each canvas and this styling should be applied there.")])]),t._v(" "),e("p",[t._v("Chart.js provides a "),e("a",{attrs:{href:"#configuration-options"}},[t._v("few options")]),t._v(" to enable responsiveness and control the resize behavior of charts by detecting when the canvas "),e("em",[t._v("display")]),t._v(" size changes and update the "),e("em",[t._v("render")]),t._v(" size accordingly.")]),t._v(" "),e("h2",{attrs:{id:"configuration-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration Options")]),t._v(" "),e("p",[t._v("Namespace: "),e("code",[t._v("options")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("responsive")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("Resizes the chart canvas when its container does ("),e("a",{attrs:{href:"#important-note"}},[t._v("important note...")]),t._v(").")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("maintainAspectRatio")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("true")])]),t._v(" "),e("td",[t._v("maintain the original canvas aspect ratio "),e("code",[t._v("(width / height)")]),t._v(" when resizing.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("aspectRatio")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("1")]),t._v("|"),e("code",[t._v("2")])]),t._v(" "),e("td",[t._v("Canvas aspect ratio (i.e. "),e("code",[t._v("width / height")]),t._v(", a value of 1 representing a square canvas). Note that this option is ignored if the height is explicitly defined either as attribute or via the style. The default value varies by chart type; Radial charts (doughnut, pie, polarArea, radar) default to "),e("code",[t._v("1")]),t._v(" and others default to "),e("code",[t._v("2")]),t._v(".")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("onResize")])]),t._v(" "),e("td",[e("code",[t._v("function")])]),t._v(" "),e("td",[e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("Called when a resize occurs. Gets passed two arguments: the chart instance and the new size.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("resizeDelay")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("0")])]),t._v(" "),e("td",[t._v("Delay the resize update by the given amount of milliseconds. This can ease the resize process by debouncing the update of the elements.")])])])]),t._v(" "),e("h2",{attrs:{id:"important-note"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#important-note"}},[t._v("#")]),t._v(" Important Note")]),t._v(" "),e("p",[t._v("Detecting when the canvas size changes can not be done directly from the "),e("code",[t._v("canvas")]),t._v(" element. Chart.js uses its parent container to update the canvas "),e("em",[t._v("render")]),t._v(" and "),e("em",[t._v("display")]),t._v(" sizes. However, this method requires the container to be "),e("strong",[t._v("relatively positioned")]),t._v(" and "),e("strong",[t._v("dedicated to the chart canvas only")]),t._v(". Responsiveness can then be achieved by setting relative values for the container size ("),e("a",{attrs:{href:"https://codepen.io/chartjs/pen/YVWZbz",target:"_blank",rel:"noopener noreferrer"}},[t._v("example"),e("OutboundLink")],1),t._v("):")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chart-container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token special-attr"}},[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),e("span",{pre:!0,attrs:{class:"token value css language-css"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("40vh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("80vw")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("canvas")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("canvas")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("The chart can also be programmatically resized by modifying the container size:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canvas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'128px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nchart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("canvas"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'128px'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Note that in order for the above code to correctly resize the chart height, the "),e("a",{attrs:{href:"#configuration-options"}},[e("code",[t._v("maintainAspectRatio")])]),t._v(" option must also be set to "),e("code",[t._v("false")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"printing-resizable-charts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#printing-resizable-charts"}},[t._v("#")]),t._v(" Printing Resizable Charts")]),t._v(" "),e("p",[t._v("CSS media queries allow changing styles when printing a page. The CSS applied from these media queries may cause charts to need to resize. However, the resize won't happen automatically. To support resizing charts when printing, you need to hook the "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint",target:"_blank",rel:"noopener noreferrer"}},[t._v("onbeforeprint"),e("OutboundLink")],1),t._v(" event and manually trigger resizing of each chart.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforePrintHandler")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" id "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" Chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instances"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("instances"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("You may also find that, due to complexities in when the browser lays out the document for printing and when resize events are fired, Chart.js is unable to properly resize for the print layout. To work around this, you can pass an explicit size to "),e("code",[t._v(".resize()")]),t._v(" then use an "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint",target:"_blank",rel:"noopener noreferrer"}},[t._v("onafterprint"),e("OutboundLink")],1),t._v(" event to restore the automatic size when done.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeprint'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  myChart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'afterprint'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  myChart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);