import { DeviceModelId } from "@ledgerhq/devices";
import isFirmwareUpdateVersionSupported from "./isFirmwareUpdateVersionSupported";
import { getEnv, setEnv } from "../env";

const goodDataset: { [key in DeviceModelId]?: string[] } = {
  nanoS: ["2.0.0", "3.0.0"],
  nanoX: ["1.2.4-6", "1.2.5"],
  nanoSP: ["1.0.0", "1.0.0-0", "1.1.1", "1.4.0", "1.1.0-rc1", "1.1.0-rc2"],
  nanoFTS: ["1.0.0", "2.0.2-il0", "1.0.0-rc4"],
};

const badDataset: { [key in DeviceModelId]?: string[] } = {
  nanoS: ["1.6.0", "1.5.5", "1.5.5-wadus"],
  nanoX: ["1.2.4-5", "2.1.0-lo3", "2.1.0-lo5"],
  nanoSP: ["0.9.9", "1.1.0-rc3"],
  nanoFTS: ["0.4.6", "1.0.0-rc.2"],
};

describe("Firmware update version availability checks", () => {
  const getDeviceInfo = (version) => ({
    version,
    mcuVersion: "0.0",
    majMin: "0.0",
    providerName: null,
    targetId: 823132162,
    isOSU: false,
    isBootloader: false,
    managerAllowed: false,
    pinValidated: false,
  });

  describe("Fails with bad values", () => {
    beforeEach(() => {
      setEnv("DISABLE_FW_UPDATE_VERSION_CHECK", false);
    });

    Object.keys(badDataset).forEach((deviceModelId) => {
      badDataset[deviceModelId].forEach((version) => {
        const deviceInfo = getDeviceInfo(version);
        it(`testing ${version} for ${deviceModelId}`, () =>
          expect(
            isFirmwareUpdateVersionSupported(deviceInfo, deviceModelId as DeviceModelId)
          ).toBe(false));
      });
    });
  });

  describe("Good values should pass", () => {
    beforeEach(() => {
      setEnv("DISABLE_FW_UPDATE_VERSION_CHECK", false);
    });

    Object.keys(goodDataset).forEach((deviceModelId) => {
      goodDataset[deviceModelId].forEach((version) => {
        const deviceInfo = getDeviceInfo(version);
        it(`testing ${version} for ${deviceModelId}`, () =>
          expect(
            isFirmwareUpdateVersionSupported(deviceInfo, deviceModelId as DeviceModelId)
          ).toBe(true));
      });
    });
  });

  describe("Everything goes if DISABLE_FW_UPDATE_VERSION_CHECK is true", () => {
    beforeEach(() => {
      setEnv("DISABLE_FW_UPDATE_VERSION_CHECK", true);
    });
    
    Object.keys(badDataset).forEach((deviceModelId) => {
      badDataset[deviceModelId].forEach((version) => {
        const deviceInfo = getDeviceInfo(version);
        it(`testing ${version} for ${deviceModelId}`, () =>
          expect(
            isFirmwareUpdateVersionSupported(deviceInfo, deviceModelId as DeviceModelId)
          ).toBe(true));
      });
    });
  })
});
