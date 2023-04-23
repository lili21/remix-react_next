import styleUrl from "~/styles/test.css";

export const meta = () => {
  return [
    {
      tagName: "link",
      rel: "preload",
      href: "https://p16-g-va.ibyteimg.com/tos-maliva-i-npqod914p0/a53f144474bd281986007ebf65b5aed5.jpg~tplv-npqod914p0-image.avif",
    },
  ];
};

export const links = () => [
  {
    rel: "stylesheet",
    href: styleUrl,
  },
];

export default function Report() {
  return (
    <div>
      my weekly report
      <img
        width={780}
        height={1368}
        src="https://p16-g-va.ibyteimg.com/tos-maliva-i-npqod914p0/a53f144474bd281986007ebf65b5aed5.jpg~tplv-npqod914p0-image.avif"
      />
    </div>
  );
}
