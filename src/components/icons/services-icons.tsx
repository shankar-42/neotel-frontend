import {
  ArrowForward as MuiArrowForward,
  Hub as MuiHub,
  Public as MuiPublic,
  SatelliteAlt as MuiSatelliteAlt,
  SettingsSuggest as MuiSettingsSuggest,
  Terminal as MuiTerminal,
  Shield as MuiShield,
  Bolt as MuiBolt,
  SupportAgent as MuiSupportAgent,
  Security as MuiSecurity,
  Speed as MuiSpeed,
  ArrowOutward as MuiArrowOutward,
  GridView as MuiGridView,
  Search as MuiSearch,
  Share as MuiShare,
  Mail as MuiMail,
  Bookmark as MuiBookmark,
  Router as MuiRouter,
  Settings as MuiSettings,
  Dns as MuiDns,
  CorporateFare as MuiCorporateFare,
  ArrowDownward as MuiArrowDownward,
  Star as MuiStar,
  MarkAsUnread as MuiMarkAsUnread,
  KeyboardArrowDown as MuiKeyboardArrowDown,
  Cloud as MuiCloud,
  AutoAwesome as MuiAutoAwesome,
} from "@mui/icons-material";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const DEFAULT_ICON_SIZE = 24;
const ICON_VARIANTS = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  MUTED: "muted",
  INVERSE: "inverse",
} as const;

const ICON_VARIANT_COLORS: Record<IconVariant, string | undefined> = {
  [ICON_VARIANTS.DEFAULT]: undefined,
  [ICON_VARIANTS.PRIMARY]: "var(--color-primary)",
  [ICON_VARIANTS.SECONDARY]: "var(--color-secondary)",
  [ICON_VARIANTS.MUTED]: "var(--color-on-surface-variant)",
  [ICON_VARIANTS.INVERSE]: "var(--color-on-primary)",
};

export type IconVariant = (typeof ICON_VARIANTS)[keyof typeof ICON_VARIANTS];

type ServiceIconProps = Omit<SvgIconProps, "fontSize" | "color"> & {
  size?: number;
  color?: string;
  variant?: IconVariant;
};

function getIconProps({
  size,
  color,
  variant = ICON_VARIANTS.DEFAULT,
  sx,
  ...rest
}: ServiceIconProps): SvgIconProps {
  const variantColor = ICON_VARIANT_COLORS[variant];

  return {
    ...rest,
    sx: {
      fontSize: size ?? DEFAULT_ICON_SIZE,
      color: color ?? variantColor,
      ...sx,
    },
  };
}

export function Hub(props: ServiceIconProps) {
  return <MuiHub {...getIconProps(props)} />;
}

export function SatelliteAlt(props: ServiceIconProps) {
  return <MuiSatelliteAlt {...getIconProps(props)} />;
}

export function Public(props: ServiceIconProps) {
  return <MuiPublic {...getIconProps(props)} />;
}

export function ArrowForward(props: ServiceIconProps) {
  return <MuiArrowForward {...getIconProps(props)} />;
}

export function SettingsSuggest(props: ServiceIconProps) {
  return <MuiSettingsSuggest {...getIconProps(props)} />;
}

export function Terminal(props: ServiceIconProps) {
  return <MuiTerminal {...getIconProps(props)} />;
}

export function Shield(props: ServiceIconProps) {
  return <MuiShield {...getIconProps(props)} />;
}

export function Bolt(props: ServiceIconProps) {
  return <MuiBolt {...getIconProps(props)} />;
}

export function SupportAgent(props: ServiceIconProps) {
  return <MuiSupportAgent {...getIconProps(props)} />;
}

export function Security(props: ServiceIconProps) {
  return <MuiSecurity {...getIconProps(props)} />;
}

export function Speed(props: ServiceIconProps) {
  return <MuiSpeed {...getIconProps(props)} />;
}

export function ArrowOutward(props: ServiceIconProps) {
  return <MuiArrowOutward {...getIconProps(props)} />;
}

export function GridView(props: ServiceIconProps) {
  return <MuiGridView {...getIconProps(props)} />;
}

export function Search(props: ServiceIconProps) {
  return <MuiSearch {...getIconProps(props)} />;
}

export function Share(props: ServiceIconProps) {
  return <MuiShare {...getIconProps(props)} />;
}

export function Mail(props: ServiceIconProps) {
  return <MuiMail {...getIconProps(props)} />;
}

export function Bookmark(props: ServiceIconProps) {
  return <MuiBookmark {...getIconProps(props)} />;
}

export function Router(props: ServiceIconProps) {
  return <MuiRouter {...getIconProps(props)} />;
}

export function Settings(props: ServiceIconProps) {
  return <MuiSettings {...getIconProps(props)} />;
}

export function Dns(props: ServiceIconProps) {
  return <MuiDns {...getIconProps(props)} />;
}

export function CorporateFare(props: ServiceIconProps) {
  return <MuiCorporateFare {...getIconProps(props)} />;
}

export function ArrowDownward(props: ServiceIconProps) {
  return <MuiArrowDownward {...getIconProps(props)} />;
}

export function Star(props: ServiceIconProps) {
  return <MuiStar {...getIconProps(props)} />;
}

export function MarkAsUnread(props: ServiceIconProps) {
  return <MuiMarkAsUnread {...getIconProps(props)} />;
}

export function KeyboardArrowDown(props: ServiceIconProps) {
  return <MuiKeyboardArrowDown {...getIconProps(props)} />;
}

export function Cloud(props: ServiceIconProps) {
  return <MuiCloud {...getIconProps(props)} />;
}

export function AutoAwesome(props: ServiceIconProps) {
  return <MuiAutoAwesome {...getIconProps(props)} />;
}
