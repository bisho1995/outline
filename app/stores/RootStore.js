// @flow
import ApiKeysStore from "./ApiKeysStore";
import AuthStore from "./AuthStore";
import AuthenticationProvidersStore from "./AuthenticationProvidersStore";
import CollectionGroupMembershipsStore from "./CollectionGroupMembershipsStore";
import CollectionsStore from "./CollectionsStore";
import DocumentPresenceStore from "./DocumentPresenceStore";
import DocumentsStore from "./DocumentsStore";
import GroupMembershipsStore from "./GroupMembershipsStore";
import GroupsStore from "./GroupsStore";
import IntegrationsStore from "./IntegrationsStore";
import MembershipsStore from "./MembershipsStore";
import NotificationSettingsStore from "./NotificationSettingsStore";
import PoliciesStore from "./PoliciesStore";
import RevisionsStore from "./RevisionsStore";
import SharesStore from "./SharesStore";
import UiStore from "./UiStore";
import UsersStore from "./UsersStore";
import ViewsStore from "./ViewsStore";

export default class RootStore {
  authenticationProviders: AuthenticationProvidersStore;
  apiKeys: ApiKeysStore;
  auth: AuthStore;
  collections: CollectionsStore;
  collectionGroupMemberships: CollectionGroupMembershipsStore;
  documents: DocumentsStore;
  groups: GroupsStore;
  groupMemberships: GroupMembershipsStore;
  integrations: IntegrationsStore;
  memberships: MembershipsStore;
  notificationSettings: NotificationSettingsStore;
  presence: DocumentPresenceStore;
  policies: PoliciesStore;
  revisions: RevisionsStore;
  shares: SharesStore;
  ui: UiStore;
  users: UsersStore;
  views: ViewsStore;

  constructor() {
    this.authenticationProviders = new AuthenticationProvidersStore(this);
    this.apiKeys = new ApiKeysStore(this);
    this.auth = new AuthStore(this);
    this.collections = new CollectionsStore(this);
    this.collectionGroupMemberships = new CollectionGroupMembershipsStore(this);
    this.documents = new DocumentsStore(this);
    this.groups = new GroupsStore(this);
    this.groupMemberships = new GroupMembershipsStore(this);
    this.integrations = new IntegrationsStore(this);
    this.memberships = new MembershipsStore(this);
    this.notificationSettings = new NotificationSettingsStore(this);
    this.presence = new DocumentPresenceStore();
    this.policies = new PoliciesStore(this);
    this.revisions = new RevisionsStore(this);
    this.shares = new SharesStore(this);
    this.ui = new UiStore();
    this.users = new UsersStore(this);
    this.views = new ViewsStore(this);
  }

  logout() {
    this.authenticationProviders.clear();
    this.apiKeys.clear();
    // this.auth omitted for reasons...
    this.collections.clear();
    this.collectionGroupMemberships.clear();
    this.documents.clear();
    this.groups.clear();
    this.groupMemberships.clear();
    this.integrations.clear();
    this.memberships.clear();
    this.notificationSettings.clear();
    this.presence.clear();
    this.policies.clear();
    this.revisions.clear();
    this.shares.clear();
    // this.ui omitted to keep ui settings between sessions
    this.users.clear();
    this.views.clear();
  }
}
