"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([["plugins_plugin-chart-echarts_src_Graph_EchartsGraph_tsx"],{

/***/ "./plugins/plugin-chart-echarts/src/Graph/EchartsGraph.tsx":
/*!*****************************************************************!*\
  !*** ./plugins/plugin-chart-echarts/src/Graph/EchartsGraph.tsx ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EchartsGraph)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/time-format/TimeFormatterRegistrySingleton.ts\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/number-format/NumberFormatterRegistrySingleton.ts\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/query/getColumnLabel.ts\");\n/* harmony import */ var _components_Echart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Echart */ \"./plugins/plugin-chart-echarts/src/components/Echart.tsx\");\n/* harmony import */ var _utils_series__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/series */ \"./plugins/plugin-chart-echarts/src/utils/series.ts\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\nfunction EchartsGraph({ height, width, echartOptions, formData, onContextMenu, setDataMask, filterState, emitCrossFilters, refs, coltypeMapping }) {\n  const getCrossFilterDataMask = (node) => {\n    if (!(node != null && node.name) || !(node != null && node.col)) {\n      return undefined;\n    }\n    const { name, col } = node;\n    const selected = Object.values((filterState == null ? void 0 : filterState.selectedValues) || {});\n    let values;\n    if (selected.includes(name)) {\n      values = selected.filter((v) => v !== name);\n    } else\n    {\n      values = [name];\n    }\n    return {\n      dataMask: {\n        extraFormData: {\n          filters: values.length ?\n          [\n          {\n            col,\n            op: 'IN',\n            val: values\n          }] :\n\n          []\n        },\n        filterState: {\n          value: values.length ? values : null,\n          selectedValues: values.length ? values : null\n        }\n      },\n      isCurrentValueSelected: selected.includes(name)\n    };\n  };\n  const eventHandlers = {\n    click: (e) => {var _getCrossFilterDataMa;\n      if (!emitCrossFilters || !setDataMask) {\n        return;\n      }\n      e.event.stop();\n      const data = echartOptions.series[0].data;\n      const node = data.find((item) => item.id === e.data.id);\n      const dataMask = (_getCrossFilterDataMa = getCrossFilterDataMask(node)) == null ? void 0 : _getCrossFilterDataMa.dataMask;\n      if (dataMask) {\n        setDataMask(dataMask);\n      }\n    },\n    contextmenu: (e) => {\n      const handleNodeClick = (data) => {\n        const node = data.find((item) => item.id === e.data.id);\n        if (node != null && node.name) {\n          return [\n          {\n            col: node.col,\n            op: '==',\n            val: node.name,\n            formattedVal: node.name\n          }];\n\n        }\n        return undefined;\n      };\n      const handleEdgeClick = (data) => {var _data$find, _data$find2;\n        const sourceValue = (_data$find = data.find((item) => item.id === e.data.source)) == null ? void 0 : _data$find.name;\n        const targetValue = (_data$find2 = data.find((item) => item.id === e.data.target)) == null ? void 0 : _data$find2.name;\n        if (sourceValue && targetValue) {\n          return [\n          {\n            col: formData.source,\n            op: '==',\n            val: sourceValue,\n            formattedVal: sourceValue\n          },\n          {\n            col: formData.target,\n            op: '==',\n            val: targetValue,\n            formattedVal: targetValue\n          }];\n\n        }\n        return undefined;\n      };\n      if (onContextMenu) {\n        e.event.stop();\n        const pointerEvent = e.event.event;\n        const data = echartOptions.series[0].data;\n        const drillToDetailFilters = e.dataType === 'node' ? handleNodeClick(data) : handleEdgeClick(data);\n        const node = data.find((item) => item.id === e.data.id);\n        onContextMenu(pointerEvent.clientX, pointerEvent.clientY, {\n          drillToDetail: drillToDetailFilters,\n          crossFilter: getCrossFilterDataMask(node),\n          drillBy: node && {\n            filters: [\n            {\n              col: node.col,\n              op: '==',\n              val: node.name,\n              formattedVal: (0,_utils_series__WEBPACK_IMPORTED_MODULE_1__.formatSeriesName)(node.name, {\n                timeFormatter: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_2__.getTimeFormatter)(formData.dateFormat),\n                numberFormatter: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_3__.getNumberFormatter)(formData.numberFormat),\n                coltype: coltypeMapping == null ? void 0 : coltypeMapping[(0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(node.col)]\n              })\n            }],\n\n            groupbyFieldName: node.col === formData.source ? 'source' : 'target'\n          }\n        });\n      }\n    }\n  };\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Echart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], { refs: refs, height: height, width: width, echartOptions: echartOptions, eventHandlers: eventHandlers });\n};(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(EchartsGraph, \"EchartsGraph\", \"/app/superset-frontend/plugins/plugin-chart-echarts/src/Graph/EchartsGraph.tsx\");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL3BsdWdpbi1jaGFydC1lY2hhcnRzL3NyYy9HcmFwaC9FY2hhcnRzR3JhcGgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQU1BO0FBRUE7QUFpQkE7QUFZQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnNldC8uL3BsdWdpbnMvcGx1Z2luLWNoYXJ0LWVjaGFydHMvc3JjL0dyYXBoL0VjaGFydHNHcmFwaC50c3g/MjA3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiAqIG9yIG1vcmUgY29udHJpYnV0b3IgbGljZW5zZSBhZ3JlZW1lbnRzLiAgU2VlIHRoZSBOT1RJQ0UgZmlsZVxuICogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiAqIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiAqIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGVcbiAqIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuICogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4gKiBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAqIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiAqIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgZ2V0Q29sdW1uTGFiZWwsXG4gIGdldE51bWJlckZvcm1hdHRlcixcbiAgZ2V0VGltZUZvcm1hdHRlcixcbn0gZnJvbSAnQHN1cGVyc2V0LXVpL2NvcmUnO1xuaW1wb3J0IHsgRXZlbnRIYW5kbGVycyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBFY2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9FY2hhcnQnO1xuaW1wb3J0IHsgR3JhcGhDaGFydFRyYW5zZm9ybWVkUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGZvcm1hdFNlcmllc05hbWUgfSBmcm9tICcuLi91dGlscy9zZXJpZXMnO1xuXG50eXBlIERhdGFSb3cgPSB7XG4gIHNvdXJjZT86IHN0cmluZztcbiAgdGFyZ2V0Pzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbiAgY29sOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn07XG50eXBlIERhdGEgPSBEYXRhUm93W107XG50eXBlIEV2ZW50ID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGV2ZW50OiB7IHN0b3A6ICgpID0+IHZvaWQ7IGV2ZW50OiBQb2ludGVyRXZlbnQgfTtcbiAgZGF0YTogRGF0YVJvdztcbiAgZGF0YVR5cGU6ICdub2RlJyB8ICdlZGdlJztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVjaGFydHNHcmFwaCh7XG4gIGhlaWdodCxcbiAgd2lkdGgsXG4gIGVjaGFydE9wdGlvbnMsXG4gIGZvcm1EYXRhLFxuICBvbkNvbnRleHRNZW51LFxuICBzZXREYXRhTWFzayxcbiAgZmlsdGVyU3RhdGUsXG4gIGVtaXRDcm9zc0ZpbHRlcnMsXG4gIHJlZnMsXG4gIGNvbHR5cGVNYXBwaW5nLFxufTogR3JhcGhDaGFydFRyYW5zZm9ybWVkUHJvcHMpIHtcbiAgY29uc3QgZ2V0Q3Jvc3NGaWx0ZXJEYXRhTWFzayA9IChub2RlOiBEYXRhUm93IHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgaWYgKCFub2RlPy5uYW1lIHx8ICFub2RlPy5jb2wpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHsgbmFtZSwgY29sIH0gPSBub2RlO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gT2JqZWN0LnZhbHVlcyhcbiAgICAgIGZpbHRlclN0YXRlPy5zZWxlY3RlZFZhbHVlcyB8fCB7fSxcbiAgICApIGFzIHN0cmluZ1tdO1xuICAgIGxldCB2YWx1ZXM6IHN0cmluZ1tdO1xuICAgIGlmIChzZWxlY3RlZC5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgdmFsdWVzID0gc2VsZWN0ZWQuZmlsdGVyKHYgPT4gdiAhPT0gbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlcyA9IFtuYW1lXTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFNYXNrOiB7XG4gICAgICAgIGV4dHJhRm9ybURhdGE6IHtcbiAgICAgICAgICBmaWx0ZXJzOiB2YWx1ZXMubGVuZ3RoXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjb2wsXG4gICAgICAgICAgICAgICAgICBvcDogJ0lOJyBhcyBjb25zdCxcbiAgICAgICAgICAgICAgICAgIHZhbDogdmFsdWVzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlclN0YXRlOiB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlcy5sZW5ndGggPyB2YWx1ZXMgOiBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkVmFsdWVzOiB2YWx1ZXMubGVuZ3RoID8gdmFsdWVzIDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpc0N1cnJlbnRWYWx1ZVNlbGVjdGVkOiBzZWxlY3RlZC5pbmNsdWRlcyhuYW1lKSxcbiAgICB9O1xuICB9O1xuICBjb25zdCBldmVudEhhbmRsZXJzOiBFdmVudEhhbmRsZXJzID0ge1xuICAgIGNsaWNrOiAoZTogRXZlbnQpID0+IHtcbiAgICAgIGlmICghZW1pdENyb3NzRmlsdGVycyB8fCAhc2V0RGF0YU1hc2spIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZS5ldmVudC5zdG9wKCk7XG4gICAgICBjb25zdCBkYXRhID0gKGVjaGFydE9wdGlvbnMgYXMgYW55KS5zZXJpZXNbMF0uZGF0YSBhcyBEYXRhO1xuICAgICAgY29uc3Qgbm9kZSA9IGRhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGUuZGF0YS5pZCk7XG4gICAgICBjb25zdCBkYXRhTWFzayA9IGdldENyb3NzRmlsdGVyRGF0YU1hc2sobm9kZSk/LmRhdGFNYXNrO1xuICAgICAgaWYgKGRhdGFNYXNrKSB7XG4gICAgICAgIHNldERhdGFNYXNrKGRhdGFNYXNrKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNvbnRleHRtZW51OiAoZTogRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZU5vZGVDbGljayA9IChkYXRhOiBEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkYXRhLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBlLmRhdGEuaWQpO1xuICAgICAgICBpZiAobm9kZT8ubmFtZSkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNvbDogbm9kZS5jb2wsXG4gICAgICAgICAgICAgIG9wOiAnPT0nIGFzIGNvbnN0LFxuICAgICAgICAgICAgICB2YWw6IG5vZGUubmFtZSxcbiAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsOiBub2RlLm5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH07XG4gICAgICBjb25zdCBoYW5kbGVFZGdlQ2xpY2sgPSAoZGF0YTogRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBzb3VyY2VWYWx1ZSA9IGRhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGUuZGF0YS5zb3VyY2UpPy5uYW1lO1xuICAgICAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IGRhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGUuZGF0YS50YXJnZXQpPy5uYW1lO1xuICAgICAgICBpZiAoc291cmNlVmFsdWUgJiYgdGFyZ2V0VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2w6IGZvcm1EYXRhLnNvdXJjZSxcbiAgICAgICAgICAgICAgb3A6ICc9PScgYXMgY29uc3QsXG4gICAgICAgICAgICAgIHZhbDogc291cmNlVmFsdWUsXG4gICAgICAgICAgICAgIGZvcm1hdHRlZFZhbDogc291cmNlVmFsdWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjb2w6IGZvcm1EYXRhLnRhcmdldCxcbiAgICAgICAgICAgICAgb3A6ICc9PScgYXMgY29uc3QsXG4gICAgICAgICAgICAgIHZhbDogdGFyZ2V0VmFsdWUsXG4gICAgICAgICAgICAgIGZvcm1hdHRlZFZhbDogdGFyZ2V0VmFsdWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH07XG4gICAgICBpZiAob25Db250ZXh0TWVudSkge1xuICAgICAgICBlLmV2ZW50LnN0b3AoKTtcbiAgICAgICAgY29uc3QgcG9pbnRlckV2ZW50ID0gZS5ldmVudC5ldmVudDtcbiAgICAgICAgY29uc3QgZGF0YSA9IChlY2hhcnRPcHRpb25zIGFzIGFueSkuc2VyaWVzWzBdLmRhdGEgYXMgRGF0YTtcbiAgICAgICAgY29uc3QgZHJpbGxUb0RldGFpbEZpbHRlcnMgPVxuICAgICAgICAgIGUuZGF0YVR5cGUgPT09ICdub2RlJyA/IGhhbmRsZU5vZGVDbGljayhkYXRhKSA6IGhhbmRsZUVkZ2VDbGljayhkYXRhKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGRhdGEuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGUuZGF0YS5pZCk7XG5cbiAgICAgICAgb25Db250ZXh0TWVudShwb2ludGVyRXZlbnQuY2xpZW50WCwgcG9pbnRlckV2ZW50LmNsaWVudFksIHtcbiAgICAgICAgICBkcmlsbFRvRGV0YWlsOiBkcmlsbFRvRGV0YWlsRmlsdGVycyxcbiAgICAgICAgICBjcm9zc0ZpbHRlcjogZ2V0Q3Jvc3NGaWx0ZXJEYXRhTWFzayhub2RlKSxcbiAgICAgICAgICBkcmlsbEJ5OiBub2RlICYmIHtcbiAgICAgICAgICAgIGZpbHRlcnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbDogbm9kZS5jb2wsXG4gICAgICAgICAgICAgICAgb3A6ICc9PScsXG4gICAgICAgICAgICAgICAgdmFsOiBub2RlLm5hbWUsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsOiBmb3JtYXRTZXJpZXNOYW1lKG5vZGUubmFtZSwge1xuICAgICAgICAgICAgICAgICAgdGltZUZvcm1hdHRlcjogZ2V0VGltZUZvcm1hdHRlcihmb3JtRGF0YS5kYXRlRm9ybWF0KSxcbiAgICAgICAgICAgICAgICAgIG51bWJlckZvcm1hdHRlcjogZ2V0TnVtYmVyRm9ybWF0dGVyKGZvcm1EYXRhLm51bWJlckZvcm1hdCksXG4gICAgICAgICAgICAgICAgICBjb2x0eXBlOiBjb2x0eXBlTWFwcGluZz8uW2dldENvbHVtbkxhYmVsKG5vZGUuY29sKV0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZ3JvdXBieUZpZWxkTmFtZTpcbiAgICAgICAgICAgICAgbm9kZS5jb2wgPT09IGZvcm1EYXRhLnNvdXJjZSA/ICdzb3VyY2UnIDogJ3RhcmdldCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8RWNoYXJ0XG4gICAgICByZWZzPXtyZWZzfVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBlY2hhcnRPcHRpb25zPXtlY2hhcnRPcHRpb25zfVxuICAgICAgZXZlbnRIYW5kbGVycz17ZXZlbnRIYW5kbGVyc31cbiAgICAvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plugins/plugin-chart-echarts/src/Graph/EchartsGraph.tsx\n");

/***/ }),

/***/ "./plugins/plugin-chart-echarts/src/components/Echart.tsx":
/*!****************************************************************!*\
  !*** ./plugins/plugin-chart-echarts/src/components/Echart.tsx ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/style/index.tsx\");\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ \"./node_modules/echarts/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\nconst Styles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__.styled.div`\n  height: ${({ height }) => height};\n  width: ${({ width }) => width};\n`;\nfunction Echart({ width, height, echartOptions, eventHandlers, zrEventHandlers, selectedValues = {}, refs }, ref) {\n  const divRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  if (refs) {\n    // eslint-disable-next-line no-param-reassign\n    refs.divRef = divRef;\n  }\n  const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const currentSelection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.keys(selectedValues) || [], [selectedValues]);\n  const previousSelection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({\n    getEchartInstance: () => chartRef.current\n  }));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!divRef.current)\n    return;\n    if (!chartRef.current) {\n      chartRef.current = (0,echarts__WEBPACK_IMPORTED_MODULE_1__.init)(divRef.current);\n    }\n    Object.entries(eventHandlers || {}).forEach(([name, handler]) => {var _chartRef$current, _chartRef$current2;\n      (_chartRef$current = chartRef.current) == null ? void 0 : _chartRef$current.off(name);\n      (_chartRef$current2 = chartRef.current) == null ? void 0 : _chartRef$current2.on(name, handler);\n    });\n    Object.entries(zrEventHandlers || {}).forEach(([name, handler]) => {var _chartRef$current3, _chartRef$current4;\n      (_chartRef$current3 = chartRef.current) == null ? void 0 : _chartRef$current3.getZr().off(name);\n      (_chartRef$current4 = chartRef.current) == null ? void 0 : _chartRef$current4.getZr().on(name, handler);\n    });\n    chartRef.current.setOption(echartOptions, true);\n  }, [echartOptions, eventHandlers, zrEventHandlers]);\n  // highlighting\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!chartRef.current)\n    return;\n    chartRef.current.dispatchAction({\n      type: 'downplay',\n      dataIndex: previousSelection.current.filter((value) => !currentSelection.includes(value))\n    });\n    if (currentSelection.length) {\n      chartRef.current.dispatchAction({\n        type: 'highlight',\n        dataIndex: currentSelection\n      });\n    }\n    previousSelection.current = currentSelection;\n  }, [currentSelection]);\n  const handleSizeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ width, height }) => {\n    if (chartRef.current) {\n      chartRef.current.resize({ width, height });\n    }\n  }, []);\n  // did mount\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    handleSizeChange({ width, height });\n    return () => {var _chartRef$current5;return (_chartRef$current5 = chartRef.current) == null ? void 0 : _chartRef$current5.dispose();};\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {\n    handleSizeChange({ width, height });\n  }, [width, height, handleSizeChange]);\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Styles, { ref: divRef, height: height, width: width });\n}__signature__(Echart, \"useRef{divRef}\\nuseRef{chartRef}\\nuseMemo{currentSelection}\\nuseRef{previousSelection}\\nuseImperativeHandle{}\\nuseEffect{}\\nuseEffect{}\\nuseCallback{handleSizeChange}\\nuseEffect{}\\nuseLayoutEffect{}\", () => [react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle]);const _default = /*#__PURE__*/\n(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Echart);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(Styles, \"Styles\", \"/app/superset-frontend/plugins/plugin-chart-echarts/src/components/Echart.tsx\");reactHotLoader.register(Echart, \"Echart\", \"/app/superset-frontend/plugins/plugin-chart-echarts/src/components/Echart.tsx\");reactHotLoader.register(_default, \"default\", \"/app/superset-frontend/plugins/plugin-chart-echarts/src/components/Echart.tsx\");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL3BsdWdpbi1jaGFydC1lY2hhcnRzL3NyYy9jb21wb25lbnRzL0VjaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnNldC8uL3BsdWdpbnMvcGx1Z2luLWNoYXJ0LWVjaGFydHMvc3JjL2NvbXBvbmVudHMvRWNoYXJ0LnRzeD9jZTgzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCwge1xuICB1c2VSZWYsXG4gIHVzZUVmZmVjdCxcbiAgdXNlTWVtbyxcbiAgZm9yd2FyZFJlZixcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VDYWxsYmFjayxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQHN1cGVyc2V0LXVpL2NvcmUnO1xuaW1wb3J0IHsgRUNoYXJ0cywgaW5pdCB9IGZyb20gJ2VjaGFydHMnO1xuaW1wb3J0IHsgRWNoYXJ0c0hhbmRsZXIsIEVjaGFydHNQcm9wcywgRWNoYXJ0c1N0eWxlc1Byb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBTdHlsZXMgPSBzdHlsZWQuZGl2PEVjaGFydHNTdHlsZXNQcm9wcz5gXG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0fTtcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGh9O1xuYDtcblxuZnVuY3Rpb24gRWNoYXJ0KFxuICB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGVjaGFydE9wdGlvbnMsXG4gICAgZXZlbnRIYW5kbGVycyxcbiAgICB6ckV2ZW50SGFuZGxlcnMsXG4gICAgc2VsZWN0ZWRWYWx1ZXMgPSB7fSxcbiAgICByZWZzLFxuICB9OiBFY2hhcnRzUHJvcHMsXG4gIHJlZjogUmVhY3QuUmVmPEVjaGFydHNIYW5kbGVyPixcbikge1xuICBjb25zdCBkaXZSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBpZiAocmVmcykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHJlZnMuZGl2UmVmID0gZGl2UmVmO1xuICB9XG4gIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmPEVDaGFydHM+KCk7XG4gIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSB1c2VNZW1vKFxuICAgICgpID0+IE9iamVjdC5rZXlzKHNlbGVjdGVkVmFsdWVzKSB8fCBbXSxcbiAgICBbc2VsZWN0ZWRWYWx1ZXNdLFxuICApO1xuICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHVzZVJlZjxzdHJpbmdbXT4oW10pO1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgIGdldEVjaGFydEluc3RhbmNlOiAoKSA9PiBjaGFydFJlZi5jdXJyZW50LFxuICB9KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpdlJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgaWYgKCFjaGFydFJlZi5jdXJyZW50KSB7XG4gICAgICBjaGFydFJlZi5jdXJyZW50ID0gaW5pdChkaXZSZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmVudHJpZXMoZXZlbnRIYW5kbGVycyB8fCB7fSkuZm9yRWFjaCgoW25hbWUsIGhhbmRsZXJdKSA9PiB7XG4gICAgICBjaGFydFJlZi5jdXJyZW50Py5vZmYobmFtZSk7XG4gICAgICBjaGFydFJlZi5jdXJyZW50Py5vbihuYW1lLCBoYW5kbGVyKTtcbiAgICB9KTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHpyRXZlbnRIYW5kbGVycyB8fCB7fSkuZm9yRWFjaCgoW25hbWUsIGhhbmRsZXJdKSA9PiB7XG4gICAgICBjaGFydFJlZi5jdXJyZW50Py5nZXRacigpLm9mZihuYW1lKTtcbiAgICAgIGNoYXJ0UmVmLmN1cnJlbnQ/LmdldFpyKCkub24obmFtZSwgaGFuZGxlcik7XG4gICAgfSk7XG5cbiAgICBjaGFydFJlZi5jdXJyZW50LnNldE9wdGlvbihlY2hhcnRPcHRpb25zLCB0cnVlKTtcbiAgfSwgW2VjaGFydE9wdGlvbnMsIGV2ZW50SGFuZGxlcnMsIHpyRXZlbnRIYW5kbGVyc10pO1xuXG4gIC8vIGhpZ2hsaWdodGluZ1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY2hhcnRSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGNoYXJ0UmVmLmN1cnJlbnQuZGlzcGF0Y2hBY3Rpb24oe1xuICAgICAgdHlwZTogJ2Rvd25wbGF5JyxcbiAgICAgIGRhdGFJbmRleDogcHJldmlvdXNTZWxlY3Rpb24uY3VycmVudC5maWx0ZXIoXG4gICAgICAgIHZhbHVlID0+ICFjdXJyZW50U2VsZWN0aW9uLmluY2x1ZGVzKHZhbHVlKSxcbiAgICAgICksXG4gICAgfSk7XG4gICAgaWYgKGN1cnJlbnRTZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBjaGFydFJlZi5jdXJyZW50LmRpc3BhdGNoQWN0aW9uKHtcbiAgICAgICAgdHlwZTogJ2hpZ2hsaWdodCcsXG4gICAgICAgIGRhdGFJbmRleDogY3VycmVudFNlbGVjdGlvbixcbiAgICAgIH0pO1xuICAgIH1cbiAgICBwcmV2aW91c1NlbGVjdGlvbi5jdXJyZW50ID0gY3VycmVudFNlbGVjdGlvbjtcbiAgfSwgW2N1cnJlbnRTZWxlY3Rpb25dKTtcblxuICBjb25zdCBoYW5kbGVTaXplQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgd2lkdGgsIGhlaWdodCB9OiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pID0+IHtcbiAgICAgIGlmIChjaGFydFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNoYXJ0UmVmLmN1cnJlbnQucmVzaXplKHsgd2lkdGgsIGhlaWdodCB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtdLFxuICApO1xuXG4gIC8vIGRpZCBtb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZVNpemVDaGFuZ2UoeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgIHJldHVybiAoKSA9PiBjaGFydFJlZi5jdXJyZW50Py5kaXNwb3NlKCk7XG4gIH0sIFtdKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZVNpemVDaGFuZ2UoeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICB9LCBbd2lkdGgsIGhlaWdodCwgaGFuZGxlU2l6ZUNoYW5nZV0pO1xuXG4gIHJldHVybiA8U3R5bGVzIHJlZj17ZGl2UmVmfSBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZihFY2hhcnQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plugins/plugin-chart-echarts/src/components/Echart.tsx\n");

/***/ })

}]);