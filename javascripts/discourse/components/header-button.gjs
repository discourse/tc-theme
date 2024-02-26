import icon from "discourse-common/helpers/d-icon";

const CTA_LINK = "/my/themes";
const CTA_TEXT = "My Themes";
const CTA_ICON = "palette";

const HeaderButton = <template>
  <button class="btn btn-primary header-theme-btn">
    <a href={{CTA_LINK}}>
      {{icon CTA_ICON}}
      <span>{{CTA_TEXT}}</span>
    </a>
  </button>
</template>;

export default HeaderButton;
