import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export default function Spinner(_ref) {
  var _ref$active = _ref.active,
    active = _ref$active === void 0 ? true : _ref$active;
  return /*#__PURE__*/_jsx("div", {
    className: ['spinner', active && 'spinner--active'].join(' '),
    role: "progressbar",
    "aria-busy": active ? 'true' : 'false'
  });
}