const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },

  errorMessage: {
    backgroundColor: '#f8d7da',
    border: '1px solid #f8d7da',
    borderRadius: '.25rem',
    color: '#721c24',
    fontSize: 14,
    marginBottom: '1rem',
    padding: '5px 10px'
  },

  pointer: { cursor: 'pointer' },

  submit: { margin: theme.spacing(3, 0, 2) }
});

export default styles;
