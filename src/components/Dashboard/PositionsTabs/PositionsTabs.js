import { PositionsTabContent } from "./";
import React, { useState } from "react";
import "./PositionsTabs.scss";
import { Box } from "@material-ui/core";
import TabsMenu from "./TabsMenu";

/**
 * @typedef {import("../../../hooks/usePositionsList").PositionsCollectionType} PositionsCollectionType
 * @typedef {Object} DefaultProps
 * @property {Boolean} [isProfile]
 */

/**
 *
 * @param {DefaultProps} props
 */
const PositionsTabs = ({ isProfile }) => {
  const [tabValue, setTabValue] = useState(0);

  /**
   * Map tab index to positions collection type.
   *
   * @returns {PositionsCollectionType} Collection type.
   */
  const mapIndexToCollectionType = () => {
    switch (tabValue) {
      case 1:
        return "closed";

      case 2:
        return "log";

      default:
        return "open";
    }
  };

  /**
   * Map tab index to positions collection type.
   *
   * @returns {PositionsCollectionType} Collection type.
   */
  const mapProfileIndexToCollectionType = () => {
    switch (tabValue) {
      case 1:
        return "profileClosed";

      default:
        return "profileOpen";
    }
  };

  /**
   * Event handler to change tab value.
   *
   * @param {React.ChangeEvent<{checked: boolean}>} event Tab index to set active.
   * @param {Number} val Tab index to set active.
   * @returns {void}
   */
  const changeTab = (event, val) => {
    setTabValue(val);
  };

  const selectedType = isProfile ? mapProfileIndexToCollectionType() : mapIndexToCollectionType();

  return (
    <Box bgcolor="grid.content" className="positionsTabs">
      <Box
        alignItems="center"
        className="tabsBox"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <TabsMenu changeTab={changeTab} isProfile={isProfile} tabValue={tabValue} />
      </Box>
      <PositionsTabContent type={selectedType} isProfile={isProfile} />
    </Box>
  );
};

export default PositionsTabs;
