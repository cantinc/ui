import { createRouting, lazy } from '@innet/dom'
import MainLayout from 'src/layouts/MainLayout'

const HomePage = lazy(() => import('src/pages/HomePage'))
const TypographyPage = lazy(() => import('src/pages/TypographyPage'))
const IconsPage = lazy(() => import('src/pages/IconsPage'))
const LayoutPage = lazy(() => import('src/pages/LayoutPage'))
const PopupsPage = lazy(() => import('src/pages/PopupsPage'))
const ButtonsPage = lazy(() => import('src/pages/ButtonsPage'))
const CardsPage = lazy(() => import('src/pages/CardsPage'))
const InteractionPage = lazy(() => import('src/pages/InteractionPage'))
const InfoPage = lazy(() => import('src/pages/InfoPage'))
const FormsPage = lazy(() => import('src/pages/FormsPage'))
const SearchPage = lazy(() => import('src/pages/SearchPage'))

const MarkdownUI = lazy(() => import('src/ui/typography/Markdown/Markdown.ui'))
const TypographyUI = lazy(() => import('src/ui/typography/Typography/Typography.ui'))
const DividerUI = lazy(() => import('src/ui/typography/Divider/Divider.ui'))
const TitleUI = lazy(() => import('src/ui/typography/Title/Title.ui'))
const SectionUI = lazy(() => import('src/ui/typography/Section/Section.ui'))

const IconUI = lazy(() => import('src/ui/icons/Icon/Icon.ui'))
const ArrowUI = lazy(() => import('src/ui/icons/Arrow/Arrow.ui'))

const LayoutUI = lazy(() => import('src/ui/layout/Layout/Layout.ui'))
const FlexUI = lazy(() => import('src/ui/layout/Flex/Flex.ui'))
const SpaceUI = lazy(() => import('src/ui/layout/Space/Space.ui'))
const SpinUI = lazy(() => import('src/ui/layout/Spin/Spin.ui'))
const AsyncSpinUI = lazy(() => import('src/ui/layout/AsyncSpin/AsyncSpin.ui'))
const SpinBoxUI = lazy(() => import('src/ui/layout/SpinBox/SpinBox.ui'))
const NavigationUI = lazy(() => import('src/ui/layout/Navigation/Navigation.ui'))
const DetailsUI = lazy(() => import('src/ui/layout/Details/Details.ui'))
const ImageUI = lazy(() => import('src/ui/layout/Image/Image.ui'))
const BadgeFooterUI = lazy(() => import('src/ui/layout/BadgeFooter/BadgeFooter.ui'))

const NotificationsUI = lazy(() => import('src/ui/popups/Notifications/Notifications.ui'))
const AlertUI = lazy(() => import('src/ui/popups/Alert/Alert.ui'))
const ModalsUI = lazy(() => import('src/ui/popups/Modals/Modals.ui'))
const DrawersUI = lazy(() => import('src/ui/popups/Drawers/Drawers.ui'))
const DropdownUI = lazy(() => import('src/ui/popups/Dropdown/Dropdown.ui'))
const DropdownMenuUI = lazy(() => import('src/ui/popups/DropdownMenu/DropdownMenu.ui'))

const ButtonUI = lazy(() => import('src/ui/buttons/Button/Button.ui'))
const BurgerButtonUI = lazy(() => import('src/ui/buttons/BurgerButton/BurgerButton.ui'))
const CloseButtonUI = lazy(() => import('src/ui/buttons/CloseButton/CloseButton.ui'))

const CardUI = lazy(() => import('src/ui/cards/Card/Card.ui'))
const CardsUI = lazy(() => import('src/ui/cards/Cards/Cards.ui'))
const CardsFlexUI = lazy(() => import('src/ui/cards/CardsFlex/CardsFlex.ui'))
const FlipCardUI = lazy(() => import('src/ui/cards/FlipCard/FlipCard.ui'))
const HoverCardUI = lazy(() => import('src/ui/cards/HoverCard/HoverCard.ui'))

const CheckboxUI = lazy(() => import('src/ui/interaction/Checkbox/Checkbox.ui'))
const RadioboxUI = lazy(() => import('src/ui/interaction/Radiobox/Radiobox.ui'))
const TagUI = lazy(() => import('src/ui/interaction/Tag/Tag.ui'))
const TagsUI = lazy(() => import('src/ui/interaction/Tags/Tags.ui'))
const ToggleUI = lazy(() => import('src/ui/interaction/Toggle/Toggle.ui'))
const ToggleBarUI = lazy(() => import('src/ui/interaction/ToggleBar/ToggleBar.ui'))
const InputUI = lazy(() => import('src/ui/interaction/Input/Input.ui'))
const InputMaskUI = lazy(() => import('src/ui/interaction/InputMask/InputMask.ui'))
const InputDateUI = lazy(() => import('src/ui/interaction/InputDate/InputDate.ui'))
const InputNumberUI = lazy(() => import('src/ui/interaction/InputNumber/InputNumber.ui'))
const TextAreaUI = lazy(() => import('src/ui/interaction/TextArea/TextArea.ui'))
const SelectorUI = lazy(() => import('src/ui/interaction/Selector/Selector.ui'))
const UploadUI = lazy(() => import('src/ui/interaction/Upload/Upload.ui'))
const SetUI = lazy(() => import('src/ui/interaction/Set/Set.ui'))
const DotsUI = lazy(() => import('src/ui/interaction/Dots/Dots.ui'))
const SlidesUI = lazy(() => import('src/ui/interaction/Slides/Slides.ui'))
const StoriesUI = lazy(() => import('src/ui/interaction/Stories/Stories.ui'))
const CalendarUI = lazy(() => import('src/ui/interaction/Calendar/Calendar.ui'))
const CalendarTitleUI = lazy(() => import('src/ui/interaction/CalendarTitle/CalendarTitle.ui'))

const ProgressUI = lazy(() => import('src/ui/info/Progress/Progress.ui'))
const InfoFieldUI = lazy(() => import('src/ui/info/InfoField/InfoField.ui'))

const FormUI = lazy(() => import('src/ui/forms/Form/Form.ui'))
const FormHiddenUI = lazy(() => import('src/ui/forms/FormHidden/FormHidden.ui'))
const FormToggleUI = lazy(() => import('src/ui/forms/FormToggle/FormToggle.ui'))
const FormCheckboxUI = lazy(() => import('src/ui/forms/FormCheckbox/FormCheckbox.ui'))
const FormRadioboxUI = lazy(() => import('src/ui/forms/FormRadiobox/FormRadiobox.ui'))
const FormInputUI = lazy(() => import('src/ui/forms/FormInput/FormInput.ui'))
const FormInputMaskUI = lazy(() => import('src/ui/forms/FormInputMask/FormInputMask.ui'))
const FormInputNumberUI = lazy(() => import('src/ui/forms/FormInputNumber/FormInputNumber.ui'))
const FormInputDateUI = lazy(() => import('src/ui/forms/FormInputDate/FormInputDate.ui'))
const FormTextAreaUI = lazy(() => import('src/ui/forms/FormTextArea/FormTextArea.ui'))
const FormSelectorUI = lazy(() => import('src/ui/forms/FormSelector/FormSelector.ui'))
const FormSetUI = lazy(() => import('src/ui/forms/FormSet/FormSet.ui'))
const FormUploadUI = lazy(() => import('src/ui/forms/FormUpload/FormUpload.ui'))

const SearchToggleUI = lazy(() => import('src/ui/search/SearchToggle/SearchToggle.ui'))
const SearchToggleBarUI = lazy(() => import('src/ui/search/SearchToggleBar/SearchToggleBar.ui'))
const SearchInputUI = lazy(() => import('src/ui/search/SearchInput/SearchInput.ui'))
const SearchInputMaskUI = lazy(() => import('src/ui/search/SearchInputMask/SearchInputMask.ui'))
const SearchInputDateUI = lazy(() => import('src/ui/search/SearchInputDate/SearchInputDate.ui'))
const SearchInputNumberUI = lazy(() => import('src/ui/search/SearchInputNumber/SearchInputNumber.ui'))
const SearchSelectorUI = lazy(() => import('src/ui/search/SearchSelector/SearchSelector.ui'))
const SearchTagsUI = lazy(() => import('src/ui/search/SearchTags/SearchTags.ui'))

export const routing = createRouting([
  {
    path: process.env.CANTINC_UI_BASE_URL,
    component: MainLayout,
    children: [
      { index: true, component: HomePage },
      {
        path: 'typography',
        children: [
          { index: true, component: TypographyPage },
          { path: 'markdown', component: MarkdownUI },
          { path: 'typography', component: TypographyUI },
          { path: 'divider', component: DividerUI },
          { path: 'title', component: TitleUI },
          { path: 'section', component: SectionUI },
        ],
      },
      {
        path: 'icons',
        children: [
          { index: true, component: IconsPage },
          { path: 'icon', component: IconUI },
          { path: 'arrow', component: ArrowUI },
        ],
      },
      {
        path: 'layout',
        children: [
          { index: true, component: LayoutPage },
          { path: 'layout', component: LayoutUI },
          { path: 'flex', component: FlexUI },
          { path: 'space', component: SpaceUI },
          { path: 'spin', component: SpinUI },
          { path: 'async-spin', component: AsyncSpinUI },
          { path: 'spin-box', component: SpinBoxUI },
          { path: 'navigation', component: NavigationUI },
          { path: 'details', component: DetailsUI },
          { path: 'image', component: ImageUI },
          { path: 'badge-footer', component: BadgeFooterUI },
        ],
      },
      {
        path: 'popups',
        children: [
          { index: true, component: PopupsPage },
          { path: 'notifications', component: NotificationsUI },
          { path: 'alert', component: AlertUI },
          { path: 'modals', component: ModalsUI },
          { path: 'drawers', component: DrawersUI },
          { path: 'dropdown', component: DropdownUI },
          { path: 'dropdown-menu', component: DropdownMenuUI },
        ],
      },
      {
        path: 'buttons',
        children: [
          { index: true, component: ButtonsPage },
          { path: 'button', component: ButtonUI },
          { path: 'burger', component: BurgerButtonUI },
          { path: 'close', component: CloseButtonUI },
        ],
      },
      {
        path: 'cards',
        children: [
          { index: true, component: CardsPage },
          { path: 'card', component: CardUI },
          { path: 'cards', component: CardsUI },
          { path: 'flex', component: CardsFlexUI },
          { path: 'flip', component: FlipCardUI },
          { path: 'hover-card', component: HoverCardUI },
        ],
      },
      {
        path: 'interaction',
        children: [
          { index: true, component: InteractionPage },
          { path: 'checkbox', component: CheckboxUI },
          { path: 'radiobox', component: RadioboxUI },
          { path: 'tag', component: TagUI },
          { path: 'tags', component: TagsUI },
          { path: 'toggle', component: ToggleUI },
          { path: 'toggle-bar', component: ToggleBarUI },
          { path: 'input', component: InputUI },
          { path: 'input-mask', component: InputMaskUI },
          { path: 'input-date', component: InputDateUI },
          { path: 'input-number', component: InputNumberUI },
          { path: 'textarea', component: TextAreaUI },
          { path: 'selector', component: SelectorUI },
          { path: 'upload', component: UploadUI },
          { path: 'set', component: SetUI },
          { path: 'dots', component: DotsUI },
          { path: 'slides', component: SlidesUI },
          { path: 'stories', component: StoriesUI },
          { path: 'calendar', component: CalendarUI },
          { path: 'calendar-title', component: CalendarTitleUI },
        ],
      },
      {
        path: 'info',
        children: [
          { index: true, component: InfoPage },
          { path: 'progress', component: ProgressUI },
          { path: 'field', component: InfoFieldUI },
        ],
      },
      {
        path: 'forms',
        children: [
          { index: true, component: FormsPage },
          { path: 'form', component: FormUI },
          { path: 'hidden', component: FormHiddenUI },
          { path: 'toggle', component: FormToggleUI },
          { path: 'checkbox', component: FormCheckboxUI },
          { path: 'radiobox', component: FormRadioboxUI },
          { path: 'input', component: FormInputUI },
          { path: 'input-mask', component: FormInputMaskUI },
          { path: 'input-number', component: FormInputNumberUI },
          { path: 'input-date', component: FormInputDateUI },
          { path: 'textarea', component: FormTextAreaUI },
          { path: 'selector', component: FormSelectorUI },
          { path: 'set', component: FormSetUI },
          { path: 'upload', component: FormUploadUI },
        ],
      },
      {
        path: 'search',
        children: [
          { index: true, component: SearchPage },
          { path: 'toggle', component: SearchToggleUI },
          { path: 'toggle-bar', component: SearchToggleBarUI },
          { path: 'input', component: SearchInputUI },
          { path: 'input-mask', component: SearchInputMaskUI },
          { path: 'input-date', component: SearchInputDateUI },
          { path: 'input-number', component: SearchInputNumberUI },
          { path: 'selector', component: SearchSelectorUI },
          { path: 'tags', component: SearchTagsUI },
        ],
      },
    ],
  },
])
