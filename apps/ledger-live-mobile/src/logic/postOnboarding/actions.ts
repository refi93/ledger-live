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
  description: "postOnboarding.actions.customImage.description",
  actionCompletedPopupLabel: "postOnboarding.actions.customImage.popupLabel",
  actionCompletedHubTitle:
    "postOnboarding.actions.customImage.hubTitleAfterAction",
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

export const claimNftAction: PostOnboardingAction = {
  id: PostOnboardingActionId.claimNft,
  Icon: Icons.BracketsMedium,
  //featureFlagId: "claimNft",
  title: "postOnboarding.actions.claimNft.title",
  description: "postOnboarding.actions.claimNft.description",
  actionCompletedPopupLabel: "postOnboarding.actions.claimNft.popupLabel",
  actionCompletedHubTitle:
    "postOnboarding.actions.claimNft.hubTitleAfterAction",
  navigationParams: [
    NavigatorName.ClaimNft,
    {
      screen: ScreenName.ClaimNftWelcome,
    },
  ],
};
