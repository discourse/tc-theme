import DButton from "discourse/components/d-button";

const CTA_LINK = "/my/themes";
const CTA_TEXT = "My Themes";
const CTA_ICON = "palette";

const HeaderButton = <template>
  <DButton
    class="btn-primary header-theme-btn"
    @href={{CTA_LINK}}
    @icon={{CTA_ICON}}
    @translatedLabel={{CTA_TEXT}}
  />
</template>;

export default HeaderButton;
