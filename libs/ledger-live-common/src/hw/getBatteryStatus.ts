import Transport from "@ledgerhq/hw-transport";
import { BatteryStatusFlags } from "@ledgerhq/types-devices";
import { TransportStatusError, StatusCodes } from "@ledgerhq/errors";

export enum BatteryStatusTypes {
  BATTERY_PERCENTAGE = 0x00,
  BATTERY_VOLTAGE = 0x01,
  BATTERY_TEMPERATURE = 0x02,
  BATTERY_CURRENT = 0x03,
  BATTERY_FLAGS = 0x04,
}

enum FlagMasks {
  IS_CHARGING = 0x00000001,
  IS_USB_ON = 0x00000002,
  IS_BLE_ON = 0x00000004,
  IS_USB_POWERED = 0x00000008,
  HAS_CHARGING_ISSUE = 0x00000010,
  HAS_TEMPERATURE_ISSUE = 0x00000020,
  HAS_BATTERY_ISSUE = 0x00000080,
}

const wadus = async (
  transport: Transport,
  p1: BatteryStatusTypes = BatteryStatusTypes.BATTERY_FLAGS
): Promise<BatteryStatusFlags | number> => {
  const res = await transport.send(0xe0, 0x10, 0x00, p1);
  const status = res.readUInt16BE(res.length - 2);

  if (status === StatusCodes.OK) {
    switch (p1) {
      case BatteryStatusTypes.BATTERY_PERCENTAGE: {
        // Nb values greater that 100 would mean a bad case
        // to be assessed if we want to break the flow.
        const temp = res.readUInt8(0);
        return temp > 100 ? -1 : temp;
      }

      case BatteryStatusTypes.BATTERY_VOLTAGE:
        return res.readUInt16BE(0);

      case BatteryStatusTypes.BATTERY_TEMPERATURE:
      case BatteryStatusTypes.BATTERY_CURRENT:
        // Nb turn the usigned byte into a signed int to cover
        // negative values. Two's compliment.
        return (res.readUInt8() << 24) >> 24;

      case BatteryStatusTypes.BATTERY_FLAGS: {
        const flags = res.readUInt16BE(2); // Nb Ignoring the first two bytes
        return {
          isCharging: !!(flags & FlagMasks.IS_CHARGING),
          isUsbOn: !!(flags & FlagMasks.IS_USB_ON),
          isBleOn: !!(flags & FlagMasks.IS_BLE_ON),
          isUsbPowered: !!(flags & FlagMasks.IS_USB_POWERED),
          hasChargingIssue: !!(flags & FlagMasks.HAS_CHARGING_ISSUE),
          hasTemperatureIssue: !!(flags & FlagMasks.HAS_TEMPERATURE_ISSUE),
          hasBatteryIssue: !!(flags & FlagMasks.HAS_BATTERY_ISSUE),
        };
      }
    }
  }

  throw new TransportStatusError(status);
};

export default wadus;
