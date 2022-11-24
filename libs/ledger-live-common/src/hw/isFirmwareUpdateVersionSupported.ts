import { DeviceModelId } from "@ledgerhq/devices";
import { DeviceInfo } from "@ledgerhq/types-live";
import { satisfies as versionSatisfies } from "semver";
import { getEnv } from "../env";
// Nb probably need to figure out a better way of handling semantic versioning for
// release candidate version ranges other than explicitly listing them here.
const deviceVersionRangesForUpdate: { [key in DeviceModelId]?: string } = {
  nanoS: ">=1.6.1",
  nanoX: ">=1.2.4-6 || =2.1.0-lo2 || =2.1.0-lo4",
  nanoSP: ">=1.0.0 || >=1.0.0-0 || =1.1.0-rc1 || =1.1.0-rc2",
  nanoFTS:
    ">1.0.0-rc.3 || =2.0.2-il0 || =2.0.2-il1 || =2.0.2-il2 || =2.0.2-il3",
};

export default (deviceInfo: DeviceInfo, modelId: DeviceModelId): boolean =>
  getEnv("DISABLE_FW_UPDATE_VERSION_CHECK") ||
  (Boolean(deviceVersionRangesForUpdate[modelId]) &&
    versionSatisfies(
      deviceInfo.version,
      deviceVersionRangesForUpdate[modelId] as string
    ));
