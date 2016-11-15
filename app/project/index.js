import { registerPrimaryPanel } from '../workspace/primary';
import ProjectPanel from './ui/ProjectPanel';

registerPrimaryPanel({
  id: 'ProjectPanel',
  displayName: 'Project Explorer',
  component: ProjectPanel
});

registerPrimaryPanel({
  id: 'ProjectPanel2',
  displayName: 'Project',
  component: ProjectPanel
});
