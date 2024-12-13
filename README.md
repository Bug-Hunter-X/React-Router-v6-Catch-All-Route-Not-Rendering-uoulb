# React Router v6 Catch-All Route Issue

This repository demonstrates a subtle bug in React Router v6 related to the catch-all route (`path="*"`).  Navigation to defined routes works correctly, but the catch-all route fails to render when an invalid URL is accessed.  The solution provides a workaround.