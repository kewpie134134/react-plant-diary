import { makeStyles } from '@material-ui/core/styles';

export const usePreviewRenderStyles = makeStyles(() => ({
  image: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  uploadButton: {
    textAlign: 'right',
  },
}));
