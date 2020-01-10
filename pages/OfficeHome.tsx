import { DefaultBodyStyles } from '../styles/DefaultBodyStyles';
import cx from 'classnames';
import { FabricIcons } from '../styles/FabricIcons';
import { ProductIcons } from '../styles/ProductIcons';
import { FileIcons } from '../styles/FileIcons';
import { IconProvider, Icon } from '../components/Icon';
import { SuiteNav } from '../components/SuiteNav';

const ThemeVariables = ({
  theme,
  applyToBody,
  children,
  ...rest
}: React.PropsWithChildren<{ theme?: any; applyToBody?: boolean }>) => (
  <div {...rest}>
    {children}
    <style jsx>
      {`
        div {
          --ms-background: red;
          --ms-color: #252423;
          --ms-brand: #106ebe;
          --ms-neutral: #ccc;
        }
      `}
    </style>
  </div>
);

export const FarArea = ({ children, ...rest }: React.PropsWithChildren<{}>) => (
  <div {...rest}>
    <style jsx>{`
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
    `}</style>
    {children}
  </div>
);

const OfficeSingleColumnLayout = ({ children }) => (
  <div className="root">
    <div className="nav">
      <SuiteNav />
    </div>
    <div className="content">{children}</div>
    <style jsx global>
      {DefaultBodyStyles}
    </style>
    <style jsx>
      {`
        .root {
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .nav {
          flex-shrink: 0;
          height: 48px;
        }
        .content {
          flex-grow: 1;
          overflow: auto;
        }
        .content::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>
  </div>
);

const StealthLinkButton = ({
  text,
  beforeIcon,
  afterIcon,
  primary,
}: {
  text?: string;
  beforeIcon?: string;
  afterIcon?: string;
  primary?: boolean;
}) => (
  <button className={cx('navButton', primary && 'primary')}>
    {beforeIcon && <Icon name={beforeIcon} className="navButtonIcon" />}
    <span>{text}</span>
    {afterIcon && <Icon name={afterIcon} className="navButtonIcon" />}
    <style jsx>{`
      .navButton {
        display: inline-flex;
        flex-wrap: none;
        align-items: center;
        cursor: pointer;
        white-space: nowrap;
        border: none;
        height: 32px;
        padding: 0 16px;
        color: inherit;
        background: transparent;
      }
      .navButton > :global(*:not(:last-child)) {
        margin-right: 8px;
      }
      .navButton:hover > span {
        text-decoration: underline;
      }
      .primary {
        color: var(--ms-brand);
      }
    `}</style>
  </button>
);

const Hero = () => (
  <div className="root">
    <div
      className="heroImage"
      style={{
        backgroundImage:
          'url(https://blobs.officehome.msocdn.com/images/content/images/hero/hero-consumer-07-write-b5e95f7f7a.jpg)',
        backgroundSize: 'cover',
      }}
    />

    <div className="heroContent">
      <span className="greeting">Good afternoon</span>
      <StealthLinkButton text="My account" afterIcon="Forward" />
      <button className="pushButton">
        <Icon name="Download" className="download" />
        <span>Install Office</span>
      </button>
    </div>

    <style jsx>{`
      .root {
        position: relative;
        width: 100%;
        height: 192px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
      }

      .heroImage {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
      }

      .heroImage:after {
        position: absolute;
        z-index: 0;
        content: '';
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
          rgba(255, 255, 255, 0.1) 25%,
          rgba(0, 0, 0, 0.5)
        );
        background-position: center;
        background-size: contain;
      }

      .heroContent {
        z-index: 1;
        color: white;
        height: 80px;
        width: 90%;
        max-width: 1128px;
        display: flex;
        align-items: center;
        margin: 0 60px;
      }

      .heroContent > :global(*:not(:first-child)) {
        margin-left: 36px;
      }

      .greeting {
        white-space: nowrap;
        flex-grow: 1;
        font-family: Segoe UI Semibold;
        font-size: 30px;
        font-weight: 400;
      }

      .navButton {
        cursor: pointer;
        white-space: nowrap;
        border: none;
        height: 32px;
        padding: 0 16px;
        color: white;
        background: transparent;
      }
      .navButton > :global(*) {
        margin-left: 8px;
      }
      .navButton:hover > span {
        text-decoration: underline;
      }

      .pushButton {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
        white-space: nowrap;
        height: 32px;
        border: none;
        background: white;
        color: var(--ms-brand);
        border-radius: 3px;
        padding: 0 16px;
      }
      .pushButton > :global(*:not(:last-child)) {
        margin-right: 8px;
      }
      .pushButton:hover {
        background-color: var(--ms-brand);
        color: #fff;
      }
    `}</style>
  </div>
);

const LaunchTile = ({
  text,
  icon,
  primary,
  hasMenu,
  ...rest
}: React.PropsWithChildren<{
  text?: string;
  icon?: string;
  primary?: boolean;
  hasMenu?: boolean;
}>) => (
  <button {...rest} className="root">
    <Icon className="icon" name={icon} size={32} />
    <span className={cx('text', primary && 'primary')}>
      <span>{text}</span>
      {hasMenu && <Icon name="ChevronDown" size={12} />}
    </span>
    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: none;
        padding: 0;
        background: #fff;
        font-weight: 400;
        /* background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PGcgZGF0YS1uYW1lPSJTVFlMRSA9IENPTE9SIj48cGF0aCBkPSJNMjguNTk2IDJIMTEuNDA0QTEuNDA0IDEuNDA0IDAgMDAxMCAzLjQwNFY1bDkuNjkgM0wzMCA1VjMuNDA0QTEuNDA0IDEuNDA0IDAgMDAyOC41OTYgMnoiIGZpbGw9IiMwMzY0YjgiLz48cGF0aCBkPSJNMzEuNjUgMTcuNDA1QTExLjM0MSAxMS4zNDEgMCAwMDMyIDE2YS42NjYuNjY2IDAgMDAtLjMzMy0uNTc2bC0uMDEzLS4wMDgtLjAwNC0uMDAyLTEwLjgzOC02LjE3NWExLjQ5OSAxLjQ5OSAwIDAwLS4xNDUtLjA4MiAxLjUgMS41IDAgMDAtMS4zMzQgMCAxLjQ5IDEuNDkgMCAwMC0uMTQ1LjA4Mkw4LjM1IDE1LjQxNWwtLjAwNC4wMDItLjAxMi4wMDdBLjY2Ni42NjYgMCAwMDggMTZhMTEuMzQ0IDExLjM0NCAwIDAwLjM1IDEuNDA1bDExLjQ5MiA4LjQwNXoiIGZpbGw9IiMwYTI3NjciLz48cGF0aCBmaWxsPSIjMjhhOGVhIiBkPSJNMjQgNWgtN2wtMi4wMjEgM0wxNyAxMWw3IDZoNnYtNmwtNi02eiIvPjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik0xMCA1aDd2NmgtN3oiLz48cGF0aCBmaWxsPSIjNTBkOWZmIiBkPSJNMjQgNWg2djZoLTZ6Ii8+PHBhdGggZmlsbD0iIzAzNjRiOCIgZD0iTTI0IDE3bC03LTZoLTd2Nmw3IDYgMTAuODMyIDEuNzY4TDI0IDE3eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0xMC4wMzEgNUgzMCIvPjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik0xNyAxMWg3djZoLTd6Ii8+PHBhdGggZmlsbD0iIzA2NGE4YyIgZD0iTTEwIDE3aDd2NmgtN3oiLz48cGF0aCBmaWxsPSIjMDA3OGQ0IiBkPSJNMjQgMTdoNnY2aC02eiIvPjxwYXRoIGQ9Ik0yMC4xOSAyNS4yMThsLTExLjc5My04LjYuNDk1LS44N3MxMC43NDUgNi4xMiAxMC45MDkgNi4yMTJhLjUyOC41MjggMCAwMC40Mi0uMDEybDEwLjkzMy02LjIzLjQ5Ni44Njl6IiBmaWxsPSIjMGEyNzY3IiBvcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0zMS42NjcgMTYuNTc3bC0uMDE0LjAwOC0uMDAzLjAwMi0xMC44MzggNi4xNzRhMS40OTcgMS40OTcgMCAwMS0xLjQ2LjA5MWwzLjc3NCA1LjA2MSA4LjI1NCAxLjc5N3YuMDA0QTEuNDk4IDEuNDk4IDAgMDAzMiAyOC41VjE2YS42NjYuNjY2IDAgMDEtLjMzMy41Nzd6IiBmaWxsPSIjMTQ5MGRmIi8+PHBhdGggZD0iTTMyIDI4LjV2LS43MzhsLTkuOTgzLTUuNjg4LTEuMjA1LjY4N2ExLjQ5NyAxLjQ5NyAwIDAxLTEuNDYuMDkxbDMuNzc0IDUuMDYxIDguMjU0IDEuNzk3di4wMDRBMS40OTggMS40OTggMCAwMDMyIDI4LjV6IiBvcGFjaXR5PSIuMDUiLz48cGF0aCBkPSJNMzEuOTUgMjguODgzTDIxLjAwNyAyMi42NWwtLjE5NS4xMWExLjQ5NyAxLjQ5NyAwIDAxLTEuNDYuMDkybDMuNzc0IDUuMDYxIDguMjU0IDEuNzk3di4wMDRhMS41MDEgMS41MDEgMCAwMC41Ny0uODN6IiBvcGFjaXR5PSIuMSIvPjxwYXRoIGQ9Ik04LjM1IDE2LjU5di0uMDFoLS4wMWwtLjAzLS4wMkEuNjUuNjUgMCAwMTggMTZ2MTIuNUExLjQ5OCAxLjQ5OCAwIDAwOS41IDMwaDIxYTEuNTAzIDEuNTAzIDAgMDAuMzctLjA1LjYzNy42MzcgMCAwMC4xOC0uMDYuMTQyLjE0MiAwIDAwLjA2LS4wMiAxLjA0OCAxLjA0OCAwIDAwLjIzLS4xM2MuMDItLjAxLjAzLS4wMS4wNC0uMDN6IiBmaWxsPSIjMjhhOGVhIi8+PHBhdGggZD0iTTE4IDI0LjY2N1Y4LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTYuNjY3IDdIMTAuMDN2Ny40NTZsLTEuNjguOTU4LS4wMDUuMDAyLS4wMTIuMDA3QS42NjYuNjY2IDAgMDA4IDE2di4wMDVWMTZ2MTBoOC42NjdBMS4zMzcgMS4zMzcgMCAwMDE4IDI0LjY2N3oiIG9wYWNpdHk9Ii4xIi8+PHBhdGggZD0iTTE3IDI1LjY2N1Y5LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTUuNjY3IDhIMTAuMDN2Ni40NTZsLTEuNjguOTU4LS4wMDUuMDAyLS4wMTIuMDA3QS42NjYuNjY2IDAgMDA4IDE2di4wMDVWMTZ2MTFoNy42NjdBMS4zMzcgMS4zMzcgMCAwMDE3IDI1LjY2N3oiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTE3IDIzLjY2N1Y5LjMzM0ExLjMzNyAxLjMzNyAwIDAwMTUuNjY3IDhIMTAuMDN2Ni40NTZsLTEuNjguOTU4LS4wMDUuMDAyLS4wMTIuMDA3QS42NjYuNjY2IDAgMDA4IDE2di4wMDVWMTZ2OWg3LjY2N0ExLjMzNyAxLjMzNyAwIDAwMTcgMjMuNjY3eiIgb3BhY2l0eT0iLjIiLz48cGF0aCBkPSJNMTYgMjMuNjY3VjkuMzMzQTEuMzM3IDEuMzM3IDAgMDAxNC42NjcgOEgxMC4wM3Y2LjQ1NmwtMS42OC45NTgtLjAwNS4wMDItLjAxMi4wMDdBLjY2Ni42NjYgMCAwMDggMTZ2LjAwNVYxNnY5aDYuNjY3QTEuMzM3IDEuMzM3IDAgMDAxNiAyMy42Njd6IiBvcGFjaXR5PSIuMiIvPjxwYXRoIGRhdGEtbmFtZT0iQmFjayBQbGF0ZSIgZD0iTTEuMzMzIDhoMTMuMzM0QTEuMzMzIDEuMzMzIDAgMDExNiA5LjMzM3YxMy4zMzRBMS4zMzMgMS4zMzMgMCAwMTE0LjY2NyAyNEgxLjMzM0ExLjMzMyAxLjMzMyAwIDAxMCAyMi42NjdWOS4zMzNBMS4zMzMgMS4zMzMgMCAwMTEuMzMzIDh6IiBmaWxsPSIjMDA3OGQ0Ii8+PHBhdGggZD0iTTMuODY3IDEzLjQ2OGE0LjE4MSA0LjE4MSAwIDAxMS42NDItMS44MTRBNC45NjUgNC45NjUgMCAwMTguMTE5IDExYTQuNjE3IDQuNjE3IDAgMDEyLjQxMy42MiA0LjE0IDQuMTQgMCAwMTEuNTk4IDEuNzMzIDUuNTk3IDUuNTk3IDAgMDEuNTYgMi41NSA1LjkwMSA1LjkwMSAwIDAxLS41NzcgMi42NjYgNC4yMzkgNC4yMzkgMCAwMS0xLjY0NSAxLjc5NEE0LjggNC44IDAgMDE3Ljk2MyAyMWE0LjcyOSA0LjcyOSAwIDAxLTIuNDY4LS42MjcgNC4yMDQgNC4yMDQgMCAwMS0xLjYxOC0xLjczNiA1LjQ1OSA1LjQ1OSAwIDAxLS41NjctMi41MTkgNi4wNTUgNi4wNTUgMCAwMS41NTctMi42NXptMS43NSA0LjI1OGEyLjcxNiAyLjcxNiAwIDAwLjkyMyAxLjE5NCAyLjQxMSAyLjQxMSAwIDAwMS40NDMuNDM1IDIuNTMzIDIuNTMzIDAgMDAxLjU0MS0uNDQ5IDIuNjAzIDIuNjAzIDAgMDAuODk3LTEuMTk3IDQuNjI2IDQuNjI2IDAgMDAuMjg2LTEuNjY1IDUuMDYzIDUuMDYzIDAgMDAtLjI3LTEuNjg2IDIuNjY5IDIuNjY5IDAgMDAtLjg2Ni0xLjI0IDIuMzg3IDIuMzg3IDAgMDAtMS41MjctLjQ3MyAyLjQ5MyAyLjQ5MyAwIDAwLTEuNDc3LjQzOSAyLjc0MSAyLjc0MSAwIDAwLS45NDQgMS4yMDMgNC43NzYgNC43NzYgMCAwMC0uMDA3IDMuNDR6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzMnYzMkgweiIvPjwvZz48L3N2Zz4=)
        center no-repeat;*/
        cursor: pointer;
      }
      .root:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.14);
        transition: transform 0.2s cubic-bezier(0.25, 0.96, 0.41, 1);
      }

      .root > :global(.icon) {
        flex-grow: 1;
        display: flex;
        align-items: flex-end;
        color: var(--ms-brand);
      }

      .text {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 46px;
        color: #252423;
      }

      .text > *:not(:last-child) {
        margin-right: 4px;
      }

      .primary {
        color: var(--ms-brand);
        font-weight: 500;
      }
    `}</style>
  </button>
);

const LaunchTiles = () => (
  <div className="root">
    <LaunchTile text="Start new" icon="Add" primary hasMenu />
    <LaunchTile text="Outlook" icon="Outlook" />
    <LaunchTile text="OneDrive" icon="OneDrive" />
    <LaunchTile text="Word" icon="Word" />
    <LaunchTile text="Excel" icon="Excel" />
    <LaunchTile text="PowerPoint" icon="PowerPoint" />
    <LaunchTile text="OneNote" icon="OneNote" />
    <LaunchTile text="Skype" icon="Skype" />
    <LaunchTile text="Calendar" icon="Calendar" />
    <LaunchTile text="People" icon="People" />
    <LaunchTile text="All apps" icon="Forward" primary />

    <style jsx>{`
      .root {
        display: grid;
        grid-gap: 8px;
        grid-template-columns: repeat(auto-fill, 96px);
        grid-auto-rows: 96px;
      }
    `}</style>
  </div>
);

const PivotItem = ({
  text,
  selected,
}: React.PropsWithChildren<{ text?: string; selected?: boolean }>) => (
  <button className={selected && 'selected'} data-text={text}>
    {text}
    <style jsx>{`
      font-size: 16px;
      font-weight: 400;
      color: #605e5c;
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      border-bottom: 2px solid;
      border-color: transparent;
      padding: 0;
      position: relative;
      outline: none;
      white-space: nowrap;

      :after {
        white-space: nowrap;
        position: absolute;
        color: #605e5c;
        opacity: 0;
        content: attr(data-text);
        left: 50%;
        transform: translateX(-50%);
        font-weight: 600;
      }

      .selected {
        font-weight: 600;
        border-bottom: 2px solid #106ebe;
        color: #252423;
      }

      :hover:not(.selected) {
        color: transparent;
        transition: color 0.1s, border-color 0.5s;
        border-color: #ddd;
      }

      :hover:not(.selected):after {
        opacity: 1;
        transition: opacity 0.1s;
      }
    `}</style>
  </button>
);

const Pivot = () => (
  <div>
    <PivotItem text="Recent" selected />
    <PivotItem text="Pinned" />
    <PivotItem text="Shared with me" />
    <FarArea>
      <StealthLinkButton
        primary
        beforeIcon="Upload"
        text="Upload and open..."
      />
    </FarArea>
    <style jsx>{`
      display: flex;
      flex-direction: row;
      justify-content: stretch;
      height: 32px;

      & > :global(*:not(:last-child)) {
        margin-right: 24px;
      }

      .upload {
        border: none;
        padding: 0;
      }
    `}</style>
  </div>
);

const ListHeader = ({ children }: React.PropsWithChildren<{}>) => (
  <div className="root">
    <Icon className="icon" name="Page" />
    <span>Name</span>
    <span>Last opened by you</span>
    <style jsx>{`
      .root {
        display: grid;
        align-items: center;
        grid-template-columns: 56px 50% auto;
        grid-template-rows: 32px;
        border-bottom: 1px solid #ccc;
        font-size: 12px;
        color: #605e5c;
      }
      .root :global(.icon) {
        justify-self: center;
      }
    `}</style>
  </div>
);

const ListRow = ({ icon }: { icon: string }) => (
  <div className="root">
    <Icon className="icon" name={icon} size={32} />
    <div className="name">
      <div className="nameContent">
        <div className="title">Document 1</div>
        <div className="breadcrumb">OneDrive (Personal) > Documents</div>
      </div>
      <button>
        <Icon name="Pinned" />
      </button>
      <button>
        <Icon name="MoreVertical" />
      </button>
    </div>
    <span>Yesterday at 10:02 PM</span>
    <style jsx>{`
      .root {
        display: grid;
        align-items: center;
        grid-template-columns: 56px 50% auto;
        grid-template-rows: 56px;
        border-bottom: 1px solid #ccc;
        font-size: 12px;
        color: #605e5c;
      }
      .root :global(.icon) {
        justify-self: center;
        align-self: center;
      }
      .name {
        display: flex;
        align-self: stretch;
        flex-direction: row;
        align-items: stretch;
      }
      .nameContent {
        flex-grow: 1;
        align-self: center;
      }
      .title {
        font-size: 14px;
        color: #252423;
      }
      .root:hover {
        transition: background-color 0.25s linear;
        background-color: #ffffff;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
      }

      button {
        border: none;
        padding: 0;
        width: 40px;
        margin-right: 8px;
        background-color: transparent;
        opacity: 0.4;
        outline: 0;
      }

      .root:hover button,
      .root:focus button {
        opacity: 1;
      }

      button:hover {
        background-color: #ddd;
      }
    `}</style>
  </div>
);

const MRU = ({ children }: React.PropsWithChildren<{}>) => (
  <div>
    <ListHeader />
    <ListRow icon="WordFile" />
    <ListRow icon="PowerPointFile" />
    <ListRow icon="PowerPointFile" />
    <ListRow icon="PowerPointFile" />
    <ListRow icon="PowerPointFile" />
    <ListRow icon="PowerPointFile" />
    <ListRow icon="PowerPointFile" />
    <ListRow icon="PowerPointFile" />
    <ListRow icon="OneNoteFile" />
    <ListRow icon="OneNoteFile" />
    <ListRow icon="OneNoteFile" />
    <ListRow icon="OneNoteFile" />
    <ListRow icon="OneNoteFile" />
    <ListRow icon="OneNoteFile" />
    <ListRow icon="OneNoteFile" />
    <ListRow icon="OneNoteFile" />
    <style jsx>{``}</style>
  </div>
);

const OfficeHome = () => (
  <IconProvider icons={{ ...FabricIcons, ...ProductIcons, ...FileIcons }}>
    <ThemeVariables applyToBody>
      <OfficeSingleColumnLayout>
        <Hero />
        <div className="content">
          <LaunchTiles />
          <Pivot />
          <MRU />
        </div>
        <style jsx>{`
          .content {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: start;
          }
          .content > :global(*) {
            margin: 20px 60px;
            width: 90%;
            max-width: 1128px;
          }
        `}</style>
      </OfficeSingleColumnLayout>
    </ThemeVariables>
  </IconProvider>
);

export default OfficeHome;
