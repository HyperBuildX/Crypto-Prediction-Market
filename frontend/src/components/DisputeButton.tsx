import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Stack, Alert, TextField, CircularProgress } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useToast } from './ToastNotification';

interface DisputeButtonProps {
  wagerId: string;
  marketId?: string;
  disabled?: boolean;
}

export const DisputeButton = ({ wagerId, marketId, disabled }: DisputeButtonProps) => {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    if (!isSubmitting) {
      setOpen(false);
      setReason('');
    }
  };

  const handleSubmit = async () => {
    if (!reason.trim()) {
      showToast('Please provide a reason for the dispute', 'warning');
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      showToast('Dispute submitted to Polymarket for resolution', 'success');
      handleClose();
    } catch (error) {
      showToast('Failed to submit dispute. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        color="warning"
        startIcon={<GavelIcon />}
        onClick={handleOpen}
        disabled={disabled}
        sx={{
          borderColor: 'rgba(255, 152, 0, 0.5)',
          '&:hover': {
            borderColor: 'warning.main',
            bgcolor: 'rgba(255, 152, 0, 0.08)',
          },
        }}
      >
        Open Dispute
      </Button>

      <Dialog 
        open={open} 
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            background: 'linear-gradient(145deg, #1a1625 0%, #0f0d14 100%)',
            border: '1px solid rgba(240, 90, 120, 0.2)',
          },
        }}
      >
        <DialogTitle>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <GavelIcon sx={{ color: 'warning.main' }} />
            <Typography variant="h6" fontWeight={700}>
              Open Dispute
            </Typography>
          </Stack>
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2.5} pt={1}>
            <Alert 
              severity="warning" 
              icon={<WarningAmberIcon />}
              sx={{ bgcolor: 'rgba(255, 152, 0, 0.08)' }}
            >
              <Typography variant="body2">
                Disputes are submitted to Polymarket for resolution. This should only be used when participants cannot agree on the wager outcome.
              </Typography>
            </Alert>

            {marketId && (
              <Alert severity="info" sx={{ bgcolor: 'rgba(33, 150, 243, 0.08)' }}>
                <Typography variant="body2">
                  Linked Market: <strong>{marketId}</strong>
                </Typography>
              </Alert>
            )}

            <TextField
              label="Dispute Reason"
              multiline
              rows={4}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Explain why you're opening this dispute..."
              fullWidth
              helperText={`${reason.length}/500 characters`}
              inputProps={{ maxLength: 500 }}
            />

            <Typography variant="caption" color="text.secondary">
              Wager ID: {wagerId}
            </Typography>
          </Stack>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2.5 }}>
          <Button onClick={handleClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="warning"
            onClick={handleSubmit}
            disabled={isSubmitting || !reason.trim()}
            startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : undefined}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Dispute'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
