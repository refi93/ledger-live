import {
  PostOnboardingAction,
  PostOnboardingActionId,
} from "@ledgerhq/types-live";
import { Icons } from "@ledgerhq/native-ui";
import { NavigatorName, ScreenName } from "../../const";

export const customImageAction: PostOnboardingAction = {
  id: PostOnboardingActionId.customImage,
  Icon: Icons.BracketsMedium,
  featureFlagId: "customImage",
  title: "postOnboarding.actions.customImage.title",
  titleCompleted: "postOnboarding.actions.customImage.titleCompleted",
  description: "postOnboarding.actions.customImage.description",
  actionCompletedPopupLabel: "postOnboarding.actions.customImage.popupLabel",
  actionCompletedHubTitle: "", // TODO: deprecated, to remove
  navigationParams: [
    NavigatorName.CustomImage,
    {
      screen: ScreenName.CustomImageStep0Welcome,
      params: {
        device: null,
      },
    },
  ],
};
