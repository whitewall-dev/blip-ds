import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

import readme from "./readme.md";

export default {
  title: "Select",
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme }
  }
};

export const defaultSelect = () => (
  <bds-select>
    <bds-select-option value="1" label="Millie Bobby"></bds-select-option>
    <bds-select-option value="2" label="Finn Wolfhard"></bds-select-option>
    <bds-select-option value="3" label="David Harbour"></bds-select-option>
    <bds-select-option value="4" label="Gaten Matarazzo"></bds-select-option>
    <bds-select-option value="5" label="Caleb McLaughlin"></bds-select-option>
    <bds-select-option value="6" label="Noah Schnapp"></bds-select-option>
  </bds-select>
);
