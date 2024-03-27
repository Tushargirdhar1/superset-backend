"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(globalThis["webpackChunksuperset"] = globalThis["webpackChunksuperset"] || []).push([["plugins_plugin-chart-echarts_src_Treemap_EchartsTreemap_tsx"],{

/***/ "./plugins/plugin-chart-echarts/src/Treemap/EchartsTreemap.tsx":
/*!*********************************************************************!*\
  !*** ./plugins/plugin-chart-echarts/src/Treemap/EchartsTreemap.tsx ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EchartsTreemap)\n/* harmony export */ });\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/time-format/TimeFormatterRegistrySingleton.ts\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/number-format/NumberFormatterRegistrySingleton.ts\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/query/getColumnLabel.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_Echart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Echart */ \"./plugins/plugin-chart-echarts/src/components/Echart.tsx\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./plugins/plugin-chart-echarts/src/constants.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./plugins/plugin-chart-echarts/src/Treemap/constants.ts\");\n/* harmony import */ var _utils_series__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/series */ \"./plugins/plugin-chart-echarts/src/utils/series.ts\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\n\n\n\nfunction EchartsTreemap({ echartOptions, emitCrossFilters, groupby, height, labelMap, onContextMenu, refs, setDataMask, selectedValues, width, formData, coltypeMapping }) {\n  const getCrossFilterDataMask = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((data, treePathInfo) => {\n    if (data != null && data.children) {\n      return undefined;\n    }\n    const { treePath } = (0,_constants__WEBPACK_IMPORTED_MODULE_1__.extractTreePathInfo)(treePathInfo);\n    const name = treePath.join(',');\n    const selected = Object.values(selectedValues);\n    let values;\n    if (selected.includes(name)) {\n      values = selected.filter((v) => v !== name);\n    } else\n    {\n      values = [name];\n    }\n    const groupbyValues = values.map((value) => labelMap[value]);\n    return {\n      dataMask: {\n        extraFormData: {\n          filters: values.length === 0 ?\n          [] :\n          groupby.map((col, idx) => {\n            const val = groupbyValues.map((v) => v[idx]);\n            if (val === null || val === undefined)\n            return {\n              col,\n              op: 'IS NULL'\n            };\n            return {\n              col,\n              op: 'IN',\n              val: val\n            };\n          })\n        },\n        filterState: {\n          value: groupbyValues.length ? groupbyValues : null,\n          selectedValues: values.length ? values : null\n        }\n      },\n      isCurrentValueSelected: selected.includes(name)\n    };\n  }, [groupby, labelMap, selectedValues]);\n  const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((data, treePathInfo) => {var _getCrossFilterDataMa;\n    if (!emitCrossFilters) {\n      return;\n    }\n    const dataMask = (_getCrossFilterDataMa = getCrossFilterDataMask(data, treePathInfo)) == null ? void 0 : _getCrossFilterDataMa.dataMask;\n    if (dataMask) {\n      setDataMask(dataMask);\n    }\n  }, [emitCrossFilters, getCrossFilterDataMask, setDataMask]);\n  const eventHandlers = {\n    click: (props) => {\n      const { data, treePathInfo } = props;\n      handleChange(data, treePathInfo);\n    },\n    contextmenu: async (eventParams) => {\n      if (onContextMenu) {\n        eventParams.event.stop();\n        const { data, treePathInfo } = eventParams;\n        const { treePath } = (0,_constants__WEBPACK_IMPORTED_MODULE_1__.extractTreePathInfo)(treePathInfo);\n        if (treePath.length > 0) {\n          const pointerEvent = eventParams.event.event;\n          const drillToDetailFilters = [];\n          const drillByFilters = [];\n          treePath.forEach((path, i) => {\n            const val = path === 'null' ? _constants__WEBPACK_IMPORTED_MODULE_2__.NULL_STRING : path;\n            drillToDetailFilters.push({\n              col: groupby[i],\n              op: '==',\n              val,\n              formattedVal: path\n            });\n            drillByFilters.push({\n              col: groupby[i],\n              op: '==',\n              val,\n              formattedVal: (0,_utils_series__WEBPACK_IMPORTED_MODULE_3__.formatSeriesName)(val, {\n                timeFormatter: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__.getTimeFormatter)(formData.dateFormat),\n                numberFormatter: (0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__.getNumberFormatter)(formData.numberFormat),\n                coltype: coltypeMapping == null ? void 0 : coltypeMapping[(0,_superset_ui_core__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(groupby[i])]\n              })\n            });\n          });\n          onContextMenu(pointerEvent.clientX, pointerEvent.clientY, {\n            drillToDetail: drillToDetailFilters,\n            crossFilter: getCrossFilterDataMask(data, treePathInfo),\n            drillBy: { filters: drillByFilters, groupbyFieldName: 'groupby' }\n          });\n        }\n      }\n    }\n  };\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Echart__WEBPACK_IMPORTED_MODULE_8__[\"default\"], { refs: refs, height: height, width: width, echartOptions: echartOptions, eventHandlers: eventHandlers, selectedValues: selectedValues });\n}__signature__(EchartsTreemap, \"useCallback{getCrossFilterDataMask}\\nuseCallback{handleChange}\");;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(EchartsTreemap, \"EchartsTreemap\", \"/app/superset-frontend/plugins/plugin-chart-echarts/src/Treemap/EchartsTreemap.tsx\");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL3BsdWdpbi1jaGFydC1lY2hhcnRzL3NyYy9UcmVlbWFwL0VjaGFydHNUcmVlbWFwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFjQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBVUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnNldC8uL3BsdWdpbnMvcGx1Z2luLWNoYXJ0LWVjaGFydHMvc3JjL1RyZWVtYXAvRWNoYXJ0c1RyZWVtYXAudHN4Pzk5MDAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBMaWNlbnNlZCB0byB0aGUgQXBhY2hlIFNvZnR3YXJlIEZvdW5kYXRpb24gKEFTRikgdW5kZXIgb25lXG4gKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiAqIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4gKiByZWdhcmRpbmcgY29weXJpZ2h0IG93bmVyc2hpcC4gIFRoZSBBU0YgbGljZW5zZXMgdGhpcyBmaWxlXG4gKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4gKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2VcbiAqIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiAqIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4gKiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxuICogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4gKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4gKiB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuaW1wb3J0IHtcbiAgRGF0YVJlY29yZFZhbHVlLFxuICBCaW5hcnlRdWVyeU9iamVjdEZpbHRlckNsYXVzZSxcbiAgZ2V0VGltZUZvcm1hdHRlcixcbiAgZ2V0Q29sdW1uTGFiZWwsXG4gIGdldE51bWJlckZvcm1hdHRlcixcbn0gZnJvbSAnQHN1cGVyc2V0LXVpL2NvcmUnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVjaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0VjaGFydCc7XG5pbXBvcnQgeyBOVUxMX1NUUklORyB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBFdmVudEhhbmRsZXJzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZXh0cmFjdFRyZWVQYXRoSW5mbyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IFRyZWVtYXBUcmFuc2Zvcm1lZFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBmb3JtYXRTZXJpZXNOYW1lIH0gZnJvbSAnLi4vdXRpbHMvc2VyaWVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWNoYXJ0c1RyZWVtYXAoe1xuICBlY2hhcnRPcHRpb25zLFxuICBlbWl0Q3Jvc3NGaWx0ZXJzLFxuICBncm91cGJ5LFxuICBoZWlnaHQsXG4gIGxhYmVsTWFwLFxuICBvbkNvbnRleHRNZW51LFxuICByZWZzLFxuICBzZXREYXRhTWFzayxcbiAgc2VsZWN0ZWRWYWx1ZXMsXG4gIHdpZHRoLFxuICBmb3JtRGF0YSxcbiAgY29sdHlwZU1hcHBpbmcsXG59OiBUcmVlbWFwVHJhbnNmb3JtZWRQcm9wcykge1xuICBjb25zdCBnZXRDcm9zc0ZpbHRlckRhdGFNYXNrID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhdGEsIHRyZWVQYXRoSW5mbykgPT4ge1xuICAgICAgaWYgKGRhdGE/LmNoaWxkcmVuKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgICBjb25zdCB7IHRyZWVQYXRoIH0gPSBleHRyYWN0VHJlZVBhdGhJbmZvKHRyZWVQYXRoSW5mbyk7XG4gICAgICBjb25zdCBuYW1lID0gdHJlZVBhdGguam9pbignLCcpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBPYmplY3QudmFsdWVzKHNlbGVjdGVkVmFsdWVzKTtcbiAgICAgIGxldCB2YWx1ZXM6IHN0cmluZ1tdO1xuICAgICAgaWYgKHNlbGVjdGVkLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgIHZhbHVlcyA9IHNlbGVjdGVkLmZpbHRlcih2ID0+IHYgIT09IG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWVzID0gW25hbWVdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBncm91cGJ5VmFsdWVzID0gdmFsdWVzLm1hcCh2YWx1ZSA9PiBsYWJlbE1hcFt2YWx1ZV0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhTWFzazoge1xuICAgICAgICAgIGV4dHJhRm9ybURhdGE6IHtcbiAgICAgICAgICAgIGZpbHRlcnM6XG4gICAgICAgICAgICAgIHZhbHVlcy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgOiBncm91cGJ5Lm1hcCgoY29sLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsOiBEYXRhUmVjb3JkVmFsdWVbXSA9IGdyb3VwYnlWYWx1ZXMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgIHYgPT4gdltpZHhdLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2wsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcDogJ0lTIE5VTEwnIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sLFxuICAgICAgICAgICAgICAgICAgICAgIG9wOiAnSU4nIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgICAgICAgIHZhbDogdmFsIGFzIChzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuKVtdLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmaWx0ZXJTdGF0ZToge1xuICAgICAgICAgICAgdmFsdWU6IGdyb3VwYnlWYWx1ZXMubGVuZ3RoID8gZ3JvdXBieVZhbHVlcyA6IG51bGwsXG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlczogdmFsdWVzLmxlbmd0aCA/IHZhbHVlcyA6IG51bGwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaXNDdXJyZW50VmFsdWVTZWxlY3RlZDogc2VsZWN0ZWQuaW5jbHVkZXMobmFtZSksXG4gICAgICB9O1xuICAgIH0sXG4gICAgW2dyb3VwYnksIGxhYmVsTWFwLCBzZWxlY3RlZFZhbHVlc10sXG4gICk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKGRhdGEsIHRyZWVQYXRoSW5mbykgPT4ge1xuICAgICAgaWYgKCFlbWl0Q3Jvc3NGaWx0ZXJzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YU1hc2sgPSBnZXRDcm9zc0ZpbHRlckRhdGFNYXNrKGRhdGEsIHRyZWVQYXRoSW5mbyk/LmRhdGFNYXNrO1xuICAgICAgaWYgKGRhdGFNYXNrKSB7XG4gICAgICAgIHNldERhdGFNYXNrKGRhdGFNYXNrKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtlbWl0Q3Jvc3NGaWx0ZXJzLCBnZXRDcm9zc0ZpbHRlckRhdGFNYXNrLCBzZXREYXRhTWFza10sXG4gICk7XG5cbiAgY29uc3QgZXZlbnRIYW5kbGVyczogRXZlbnRIYW5kbGVycyA9IHtcbiAgICBjbGljazogcHJvcHMgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhLCB0cmVlUGF0aEluZm8gfSA9IHByb3BzO1xuICAgICAgaGFuZGxlQ2hhbmdlKGRhdGEsIHRyZWVQYXRoSW5mbyk7XG4gICAgfSxcbiAgICBjb250ZXh0bWVudTogYXN5bmMgZXZlbnRQYXJhbXMgPT4ge1xuICAgICAgaWYgKG9uQ29udGV4dE1lbnUpIHtcbiAgICAgICAgZXZlbnRQYXJhbXMuZXZlbnQuc3RvcCgpO1xuICAgICAgICBjb25zdCB7IGRhdGEsIHRyZWVQYXRoSW5mbyB9ID0gZXZlbnRQYXJhbXM7XG4gICAgICAgIGNvbnN0IHsgdHJlZVBhdGggfSA9IGV4dHJhY3RUcmVlUGF0aEluZm8odHJlZVBhdGhJbmZvKTtcbiAgICAgICAgaWYgKHRyZWVQYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBwb2ludGVyRXZlbnQgPSBldmVudFBhcmFtcy5ldmVudC5ldmVudDtcbiAgICAgICAgICBjb25zdCBkcmlsbFRvRGV0YWlsRmlsdGVyczogQmluYXJ5UXVlcnlPYmplY3RGaWx0ZXJDbGF1c2VbXSA9IFtdO1xuICAgICAgICAgIGNvbnN0IGRyaWxsQnlGaWx0ZXJzOiBCaW5hcnlRdWVyeU9iamVjdEZpbHRlckNsYXVzZVtdID0gW107XG4gICAgICAgICAgdHJlZVBhdGguZm9yRWFjaCgocGF0aCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gcGF0aCA9PT0gJ251bGwnID8gTlVMTF9TVFJJTkcgOiBwYXRoO1xuICAgICAgICAgICAgZHJpbGxUb0RldGFpbEZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgIGNvbDogZ3JvdXBieVtpXSxcbiAgICAgICAgICAgICAgb3A6ICc9PScsXG4gICAgICAgICAgICAgIHZhbCxcbiAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsOiBwYXRoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkcmlsbEJ5RmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgY29sOiBncm91cGJ5W2ldLFxuICAgICAgICAgICAgICBvcDogJz09JyxcbiAgICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWw6IGZvcm1hdFNlcmllc05hbWUodmFsLCB7XG4gICAgICAgICAgICAgICAgdGltZUZvcm1hdHRlcjogZ2V0VGltZUZvcm1hdHRlcihmb3JtRGF0YS5kYXRlRm9ybWF0KSxcbiAgICAgICAgICAgICAgICBudW1iZXJGb3JtYXR0ZXI6IGdldE51bWJlckZvcm1hdHRlcihmb3JtRGF0YS5udW1iZXJGb3JtYXQpLFxuICAgICAgICAgICAgICAgIGNvbHR5cGU6IGNvbHR5cGVNYXBwaW5nPy5bZ2V0Q29sdW1uTGFiZWwoZ3JvdXBieVtpXSldLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9uQ29udGV4dE1lbnUocG9pbnRlckV2ZW50LmNsaWVudFgsIHBvaW50ZXJFdmVudC5jbGllbnRZLCB7XG4gICAgICAgICAgICBkcmlsbFRvRGV0YWlsOiBkcmlsbFRvRGV0YWlsRmlsdGVycyxcbiAgICAgICAgICAgIGNyb3NzRmlsdGVyOiBnZXRDcm9zc0ZpbHRlckRhdGFNYXNrKGRhdGEsIHRyZWVQYXRoSW5mbyksXG4gICAgICAgICAgICBkcmlsbEJ5OiB7IGZpbHRlcnM6IGRyaWxsQnlGaWx0ZXJzLCBncm91cGJ5RmllbGROYW1lOiAnZ3JvdXBieScgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RWNoYXJ0XG4gICAgICByZWZzPXtyZWZzfVxuICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBlY2hhcnRPcHRpb25zPXtlY2hhcnRPcHRpb25zfVxuICAgICAgZXZlbnRIYW5kbGVycz17ZXZlbnRIYW5kbGVyc31cbiAgICAgIHNlbGVjdGVkVmFsdWVzPXtzZWxlY3RlZFZhbHVlc31cbiAgICAvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plugins/plugin-chart-echarts/src/Treemap/EchartsTreemap.tsx\n");

/***/ }),

/***/ "./plugins/plugin-chart-echarts/src/components/Echart.tsx":
/*!****************************************************************!*\
  !*** ./plugins/plugin-chart-echarts/src/components/Echart.tsx ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @superset-ui/core */ \"./packages/superset-ui-core/src/style/index.tsx\");\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ \"./node_modules/echarts/index.js\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;enterModule && enterModule(module);})();var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {return a;}; /**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * \"License\"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n\n\nconst Styles = _superset_ui_core__WEBPACK_IMPORTED_MODULE_2__.styled.div`\n  height: ${({ height }) => height};\n  width: ${({ width }) => width};\n`;\nfunction Echart({ width, height, echartOptions, eventHandlers, zrEventHandlers, selectedValues = {}, refs }, ref) {\n  const divRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  if (refs) {\n    // eslint-disable-next-line no-param-reassign\n    refs.divRef = divRef;\n  }\n  const chartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n  const currentSelection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Object.keys(selectedValues) || [], [selectedValues]);\n  const previousSelection = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({\n    getEchartInstance: () => chartRef.current\n  }));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!divRef.current)\n    return;\n    if (!chartRef.current) {\n      chartRef.current = (0,echarts__WEBPACK_IMPORTED_MODULE_1__.init)(divRef.current);\n    }\n    Object.entries(eventHandlers || {}).forEach(([name, handler]) => {var _chartRef$current, _chartRef$current2;\n      (_chartRef$current = chartRef.current) == null ? void 0 : _chartRef$current.off(name);\n      (_chartRef$current2 = chartRef.current) == null ? void 0 : _chartRef$current2.on(name, handler);\n    });\n    Object.entries(zrEventHandlers || {}).forEach(([name, handler]) => {var _chartRef$current3, _chartRef$current4;\n      (_chartRef$current3 = chartRef.current) == null ? void 0 : _chartRef$current3.getZr().off(name);\n      (_chartRef$current4 = chartRef.current) == null ? void 0 : _chartRef$current4.getZr().on(name, handler);\n    });\n    chartRef.current.setOption(echartOptions, true);\n  }, [echartOptions, eventHandlers, zrEventHandlers]);\n  // highlighting\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!chartRef.current)\n    return;\n    chartRef.current.dispatchAction({\n      type: 'downplay',\n      dataIndex: previousSelection.current.filter((value) => !currentSelection.includes(value))\n    });\n    if (currentSelection.length) {\n      chartRef.current.dispatchAction({\n        type: 'highlight',\n        dataIndex: currentSelection\n      });\n    }\n    previousSelection.current = currentSelection;\n  }, [currentSelection]);\n  const handleSizeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ width, height }) => {\n    if (chartRef.current) {\n      chartRef.current.resize({ width, height });\n    }\n  }, []);\n  // did mount\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    handleSizeChange({ width, height });\n    return () => {var _chartRef$current5;return (_chartRef$current5 = chartRef.current) == null ? void 0 : _chartRef$current5.dispose();};\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {\n    handleSizeChange({ width, height });\n  }, [width, height, handleSizeChange]);\n  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)(Styles, { ref: divRef, height: height, width: width });\n}__signature__(Echart, \"useRef{divRef}\\nuseRef{chartRef}\\nuseMemo{currentSelection}\\nuseRef{previousSelection}\\nuseImperativeHandle{}\\nuseEffect{}\\nuseEffect{}\\nuseCallback{handleSizeChange}\\nuseEffect{}\\nuseLayoutEffect{}\", () => [react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle]);const _default = /*#__PURE__*/\n(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(Echart);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);;(function () {var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;if (!reactHotLoader) {return;}reactHotLoader.register(Styles, \"Styles\", \"/app/superset-frontend/plugins/plugin-chart-echarts/src/components/Echart.tsx\");reactHotLoader.register(Echart, \"Echart\", \"/app/superset-frontend/plugins/plugin-chart-echarts/src/components/Echart.tsx\");reactHotLoader.register(_default, \"default\", \"/app/superset-frontend/plugins/plugin-chart-echarts/src/components/Echart.tsx\");})();;(function () {var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;leaveModule && leaveModule(module);})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbHVnaW5zL3BsdWdpbi1jaGFydC1lY2hhcnRzL3NyYy9jb21wb25lbnRzL0VjaGFydC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBU0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcnNldC8uL3BsdWdpbnMvcGx1Z2luLWNoYXJ0LWVjaGFydHMvc3JjL2NvbXBvbmVudHMvRWNoYXJ0LnRzeD9jZTgzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuICogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4gKiBkaXN0cmlidXRlZCB3aXRoIHRoaXMgd29yayBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvblxuICogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuICogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuICogXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlXG4gKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiAqIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICogc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9uc1xuICogdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmltcG9ydCBSZWFjdCwge1xuICB1c2VSZWYsXG4gIHVzZUVmZmVjdCxcbiAgdXNlTWVtbyxcbiAgZm9yd2FyZFJlZixcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZSxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VDYWxsYmFjayxcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQHN1cGVyc2V0LXVpL2NvcmUnO1xuaW1wb3J0IHsgRUNoYXJ0cywgaW5pdCB9IGZyb20gJ2VjaGFydHMnO1xuaW1wb3J0IHsgRWNoYXJ0c0hhbmRsZXIsIEVjaGFydHNQcm9wcywgRWNoYXJ0c1N0eWxlc1Byb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBTdHlsZXMgPSBzdHlsZWQuZGl2PEVjaGFydHNTdHlsZXNQcm9wcz5gXG4gIGhlaWdodDogJHsoeyBoZWlnaHQgfSkgPT4gaGVpZ2h0fTtcbiAgd2lkdGg6ICR7KHsgd2lkdGggfSkgPT4gd2lkdGh9O1xuYDtcblxuZnVuY3Rpb24gRWNoYXJ0KFxuICB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGVjaGFydE9wdGlvbnMsXG4gICAgZXZlbnRIYW5kbGVycyxcbiAgICB6ckV2ZW50SGFuZGxlcnMsXG4gICAgc2VsZWN0ZWRWYWx1ZXMgPSB7fSxcbiAgICByZWZzLFxuICB9OiBFY2hhcnRzUHJvcHMsXG4gIHJlZjogUmVhY3QuUmVmPEVjaGFydHNIYW5kbGVyPixcbikge1xuICBjb25zdCBkaXZSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBpZiAocmVmcykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHJlZnMuZGl2UmVmID0gZGl2UmVmO1xuICB9XG4gIGNvbnN0IGNoYXJ0UmVmID0gdXNlUmVmPEVDaGFydHM+KCk7XG4gIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSB1c2VNZW1vKFxuICAgICgpID0+IE9iamVjdC5rZXlzKHNlbGVjdGVkVmFsdWVzKSB8fCBbXSxcbiAgICBbc2VsZWN0ZWRWYWx1ZXNdLFxuICApO1xuICBjb25zdCBwcmV2aW91c1NlbGVjdGlvbiA9IHVzZVJlZjxzdHJpbmdbXT4oW10pO1xuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoe1xuICAgIGdldEVjaGFydEluc3RhbmNlOiAoKSA9PiBjaGFydFJlZi5jdXJyZW50LFxuICB9KSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWRpdlJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgaWYgKCFjaGFydFJlZi5jdXJyZW50KSB7XG4gICAgICBjaGFydFJlZi5jdXJyZW50ID0gaW5pdChkaXZSZWYuY3VycmVudCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmVudHJpZXMoZXZlbnRIYW5kbGVycyB8fCB7fSkuZm9yRWFjaCgoW25hbWUsIGhhbmRsZXJdKSA9PiB7XG4gICAgICBjaGFydFJlZi5jdXJyZW50Py5vZmYobmFtZSk7XG4gICAgICBjaGFydFJlZi5jdXJyZW50Py5vbihuYW1lLCBoYW5kbGVyKTtcbiAgICB9KTtcblxuICAgIE9iamVjdC5lbnRyaWVzKHpyRXZlbnRIYW5kbGVycyB8fCB7fSkuZm9yRWFjaCgoW25hbWUsIGhhbmRsZXJdKSA9PiB7XG4gICAgICBjaGFydFJlZi5jdXJyZW50Py5nZXRacigpLm9mZihuYW1lKTtcbiAgICAgIGNoYXJ0UmVmLmN1cnJlbnQ/LmdldFpyKCkub24obmFtZSwgaGFuZGxlcik7XG4gICAgfSk7XG5cbiAgICBjaGFydFJlZi5jdXJyZW50LnNldE9wdGlvbihlY2hhcnRPcHRpb25zLCB0cnVlKTtcbiAgfSwgW2VjaGFydE9wdGlvbnMsIGV2ZW50SGFuZGxlcnMsIHpyRXZlbnRIYW5kbGVyc10pO1xuXG4gIC8vIGhpZ2hsaWdodGluZ1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY2hhcnRSZWYuY3VycmVudCkgcmV0dXJuO1xuICAgIGNoYXJ0UmVmLmN1cnJlbnQuZGlzcGF0Y2hBY3Rpb24oe1xuICAgICAgdHlwZTogJ2Rvd25wbGF5JyxcbiAgICAgIGRhdGFJbmRleDogcHJldmlvdXNTZWxlY3Rpb24uY3VycmVudC5maWx0ZXIoXG4gICAgICAgIHZhbHVlID0+ICFjdXJyZW50U2VsZWN0aW9uLmluY2x1ZGVzKHZhbHVlKSxcbiAgICAgICksXG4gICAgfSk7XG4gICAgaWYgKGN1cnJlbnRTZWxlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICBjaGFydFJlZi5jdXJyZW50LmRpc3BhdGNoQWN0aW9uKHtcbiAgICAgICAgdHlwZTogJ2hpZ2hsaWdodCcsXG4gICAgICAgIGRhdGFJbmRleDogY3VycmVudFNlbGVjdGlvbixcbiAgICAgIH0pO1xuICAgIH1cbiAgICBwcmV2aW91c1NlbGVjdGlvbi5jdXJyZW50ID0gY3VycmVudFNlbGVjdGlvbjtcbiAgfSwgW2N1cnJlbnRTZWxlY3Rpb25dKTtcblxuICBjb25zdCBoYW5kbGVTaXplQ2hhbmdlID0gdXNlQ2FsbGJhY2soXG4gICAgKHsgd2lkdGgsIGhlaWdodCB9OiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pID0+IHtcbiAgICAgIGlmIChjaGFydFJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNoYXJ0UmVmLmN1cnJlbnQucmVzaXplKHsgd2lkdGgsIGhlaWdodCB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtdLFxuICApO1xuXG4gIC8vIGRpZCBtb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZVNpemVDaGFuZ2UoeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICAgIHJldHVybiAoKSA9PiBjaGFydFJlZi5jdXJyZW50Py5kaXNwb3NlKCk7XG4gIH0sIFtdKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZVNpemVDaGFuZ2UoeyB3aWR0aCwgaGVpZ2h0IH0pO1xuICB9LCBbd2lkdGgsIGhlaWdodCwgaGFuZGxlU2l6ZUNoYW5nZV0pO1xuXG4gIHJldHVybiA8U3R5bGVzIHJlZj17ZGl2UmVmfSBoZWlnaHQ9e2hlaWdodH0gd2lkdGg9e3dpZHRofSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9yd2FyZFJlZihFY2hhcnQpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./plugins/plugin-chart-echarts/src/components/Echart.tsx\n");

/***/ })

}]);