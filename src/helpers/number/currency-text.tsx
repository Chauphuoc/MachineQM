export const CurrencyText = (total?: number) => {
  if (!total) return '';

  var numberReader = (() => {
    var t = [
        'không',
        'một',
        'hai',
        'ba',
        'bốn',
        'năm',
        'sáu',
        'bảy',
        'tám',
        'chín',
      ],
      r = (r: any, n: any) => {
        var o = '',
          a = Math.floor(r / 10),
          e = r % 10;
        return (
          a > 1
            ? ((o = ' ' + t[a] + ' mươi'), 1 == e && (o += ' mốt'))
            : 1 == a
            ? ((o = ' mười'), 1 == e && (o += ' một'))
            : n && e > 0 && (o = ' lẻ'),
          5 == e && a >= 1
            ? (o += ' lăm')
            : 4 == e && a >= 1
            ? (o += ' tư')
            : (e > 1 || (1 == e && 0 == a)) && (o += ' ' + t[e]),
          o
        );
      },
      n = (n: number, o: any) => {
        var a = '',
          e = Math.floor(n / 100),
          // eslint-disable-next-line no-redeclare
          n = n % 100;
        return (
          o || e > 0
            ? ((a = ' ' + t[e] + ' trăm'), (a += r(n, !0)))
            : (a = r(n, !1)),
          a
        );
      },
      o = (t: number, r: any) => {
        var o = '',
          a = Math.floor(t / 1e6),
          // eslint-disable-next-line no-redeclare
          t = t % 1e6;
        a > 0 && ((o = n(a, r) + ' triệu'), (r = !0));
        var e = Math.floor(t / 1e3),
          // eslint-disable-next-line no-redeclare
          t = t % 1e3;
        return (
          e > 0 && ((o += n(e, r) + ' nghìn'), (r = !0)),
          t > 0 && (o += n(t, r)),
          o
        );
      };
    return {
      read: (r: any) => {
        var ty = null;
        if (0 == r) return t[0];
        var n = '',
          a = '';
        do
          (ty = r % 1e9),
            (r = Math.floor(r / 1e9)),
            (n = r > 0 ? o(ty, !0) + a + n : o(ty, !1) + a + n),
            (a = ' tỷ');
        while (r > 0);
        let totalText = n.trim();
        totalText =
          totalText.substring(0, 1).toUpperCase() +
          totalText.substring(1, totalText.length);
        return totalText;
      },
    };
  })();

  return '(' + numberReader.read(total) + ' đồng)';
};
